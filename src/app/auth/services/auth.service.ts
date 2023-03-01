import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthResponse, RegistroStatus, RenovarToken, Usuario, RespuestaLoginGoogle } from './../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  public user!:Usuario;

  get usuario(){
    return this.user;
  }

  constructor(private http: HttpClient) { }

  //Obtenía un error de CORS por parte del backend.
  //para solucionarlo añadí al backend NelmioCorsBundle
  //mediante composer require nelmio/cors-bundle y modifique el nelmio_cors.yaml
  login(email: string, password:string){

    const url = `${this.baseUrl}/api/login_check`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          console.log(resp);
          if (resp.token){
            localStorage.setItem('token', resp.token);
          }
        }),
        map(resp => resp.token),
        catchError(err => of(false))
      )
  }


  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}/userLogged`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

    return this.http.get<RenovarToken>(url, {headers})
      .pipe(
        map(resp => {
          const lista = JSON.parse(JSON.stringify(resp));
           this.user = {
            username: lista[0].username,
            roles: lista[0].roles
          }; 

          return resp!=null;
        }),
        catchError(err => of(false))
      )
  }


  registro(email: string, password:string): Observable<boolean>{
    const url = `${this.baseUrl}/user/create`;
    const roles: string[] = ['ROLE_USER','ROLE_ADMIN'];
    const body = {email, password, roles};

    return this.http.post<RegistroStatus>(url,body)
      .pipe(
        map(res => {
          console.log(res);
          return res.status!=null
        }),
        catchError(err => of(false))
      )
  }


  googleSignIn(token: string){
    const url = `${this.baseUrl}/login/google`;
    const body = {token};

    return this.http.post<RespuestaLoginGoogle>(url,body)
    
  }


}
