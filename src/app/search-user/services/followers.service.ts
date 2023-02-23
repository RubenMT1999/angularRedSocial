import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NumeroSeguidores, NombreSeguidores, Seguido, IdFollows } from '../interfaces/inferaceFollowers';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private baseUrl: string = environment.baseUrl;

  public totalSeguidores:any;

  public nombresSeguidores?:string[] = [];

  public cuantosMeSiguen?:number;

  public perfilesQueMeSiguen?:string[] = [];

  //Obtener numero de personas a quien sigo
  get numeroSeguidos(){
    return this.totalSeguidores;
  }

  //Listar a quien sigo
  get listaSeguidores(){
    return this.nombresSeguidores;
  }

  //Obtener numero de personas que me siguen
  get verNumeroSeguidores(){
    return this.cuantosMeSiguen;
  }

  //Listar quien me sigue
  get listarQuienMeSigue(){
    return this.perfilesQueMeSiguen;
  }

  constructor(private http: HttpClient) { }


  //METODOS de SIGUIENDO

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


  loSigue(usernameEmisor?:string, usernameReceptor?:string){
    const url = `${this.baseUrl}/followers/loSigue`;
    const body = {usernameEmisor, usernameReceptor};

    return this.http.post<IdFollows>(url,body)
      .pipe(
        map(resp => {
          console.log('id: ', resp.idFollow);
          return resp.idFollow != null;
        }),
        catchError(err => of(false))
      )

  }


  dejarDeSeguir(twitter_username?:string){
    const url = `${this.baseUrl}/followers/deleteFollower`;
    const body = {twitter_username};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

      const options = {
        headers,
        body: {
          twitter_username: twitter_username
        }
        
      };

      return this.http.delete<Seguido>(url,options)
      .pipe(
        map(resp => {
          return resp!=null;
        }),
        catchError(err => of(false))
      )
  }






  //METODOS de SEGUIDORES

  verMisSeguidores(twitter_username?:string){
    const url = `${this.baseUrl}/followers/contarQuienMeSigue`;
    const body = {twitter_username};

    return this.http.post<NumeroSeguidores>(url,body)
      .subscribe(resp => {
        this.cuantosMeSiguen = resp.array;
      });
  }


  obtenerUsernameSeguidores(twitter_username?:string){

    const url = `${this.baseUrl}/followers/listarQuienMeSigue`;
    const body = {twitter_username};

    return this.http.post<NombreSeguidores>(url,body)
    .subscribe(resp => {
      this.perfilesQueMeSiguen = resp.listaUsuarios;
    });



  }



}