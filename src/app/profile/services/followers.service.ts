import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NumeroSeguidores, NombreSeguidores, Seguido } from '../interfaces/interfaceFollowers';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private baseUrl: string = environment.baseUrl;

  public totalSeguidores:any;

  public nombresSeguidores?:string[] = [];


  get numeroSeguidores(){
    return this.totalSeguidores;
  }

  get listaSeguidores(){
    return this.nombresSeguidores;
  }

  constructor(private http: HttpClient) { }


  obtenerNumeroSeguidores(twitter_username?:string){
    const url = `${this.baseUrl}/followers/contarFollowers`;
    const body = {twitter_username};

    return this.http.post<NumeroSeguidores>(url,body)
      .subscribe(resp => {
        this.totalSeguidores = resp.array;
      });
  }


  listarSeguidores(twitter_username?:string){
    const url = `${this.baseUrl}/followers/listarFollowers`;
    const body = {twitter_username};

    return this.http.post<NombreSeguidores>(url,body)
    .subscribe(resp => {
      this.nombresSeguidores = resp.listaUsuarios;
    });


  }


  seguirUsuario(twitterUsername?:string){
    const url = `${this.baseUrl}/followers/addFollower`;
    const body = {twitterUsername};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<Seguido>(url,body,{headers})
      .pipe(
        map(resp => {
          return resp!=null;
        }),
        catchError(err => of(false))
      )


  }





}
