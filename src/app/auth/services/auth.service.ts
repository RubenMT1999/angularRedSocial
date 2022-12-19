import { AuthResponse } from './../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Obtenía un error de CORS por parte del backend.
  //para solucionarlo añadí al backend NelmioCorsBundle
  //mediante composer require nelmio/cors-bundle y modifique el nelmio_cors.yaml
  login(email: string, password:string){

    const url = `${this.baseUrl}/api/login_check`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        map(resp => resp.token!= null),
        catchError(err => of(false))
      )

  }
}
