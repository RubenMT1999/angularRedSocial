import {map, catchError, of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  UserProfile,
  ProfileStatus,
  ObtenerProfile,
  DateOfBirth,
  userSeguidores, PostRelioMostrar, Publicacion, numero,
} from './../interfaces/interfaceProfile';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {ArrayPostUsers, PostsUsers} from "../interfaces/interfacePost";
import {ArrayVeces} from "./../interfaces/interfaceProfile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string = environment.baseUrl;

  public userProfile!: UserProfile;

  public postRelios!: PostRelioMostrar[];

  public numerorelios!: ArrayVeces;

  public perfilesBuscados!: UserProfile[];

  public usersSeguidores?: userSeguidores;

  get profile(){
    return this.userProfile;
  }

  get users(){
    return this.usersSeguidores
  }

  get buscados(){
    return this.perfilesBuscados;
  }

  constructor(private http: HttpClient) { }


  setProfile(name?: string, bio?:string, website_url?:string, twitter_username?:string,
    company?:string, location?:string, date_of_birth?:Date, usermail?:string, phone_number?:string){

    const url = `${this.baseUrl}/profile/create`;
    const body = {name, bio, website_url, twitter_username, company, location,
                date_of_birth, usermail, phone_number};

    return this.http.post<ProfileStatus>(url, body)
          .pipe(
            map(resp => {
              console.log(resp);
              return resp.status != null;
            }),
            catchError(err => of(false))
          )
  }

  obtenerRelio(){
    const url = `${this.baseUrl}/post/mostrarRelio`;
    //const body = {email};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');
    return this.http.post<Publicacion>(url,{},{headers})
      .pipe(
        map(resp => {
          this.postRelios = resp.publicacion!;

          return resp.publicacion?.length != 0
        }),
        catchError(err => of(false))
      );
  }

  obtenerNumeroRelio(){
    const url = `${this.baseUrl}/relio/user`;
    //const body = {email};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');
    return this.http.post<ArrayVeces>(url,{},{headers})
      .pipe(
        map(resp => {
          this.numerorelios = resp;

          return true;
        }),
        catchError(err => of(false))
      );
  }


  getProfile(user : string){
    const url = `${this.baseUrl}/profile/get`;
    const body = {user};

    return this.http.post<ObtenerProfile>(url, body)
          .pipe(
            map(resp => {

              this.userProfile = {
                name: resp.userProfile[0].name,
                bio: resp.userProfile[0].bio,
                weburl: resp.userProfile[0].website_url,
                username: resp.userProfile[0].username,
                empresa: resp.userProfile[0].company,
                direccion: resp.userProfile[0].location,
                // phone_number: resp.userProfile[0].phone_number
                // DateOfBirth: resp.userProfile[0].date_of_birth,

              }

              console.log(this.userProfile.username);
              return true;
            }),
            catchError(err => of(true))
          )
  }




  getUser(){
    const url = `${this.baseUrl}/profile/follow`;
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') || '');
    return this.http.post<userSeguidores>(url,{},{headers})
      .pipe(
        map(resp => {
          this.usersSeguidores = resp;
          // this.usersSeguidores.sigo = resp.sigo;
          // this.usersSeguidores.meSiguen = resp.meSiguen;


          return true;

        }),
        catchError(err => of(true))

      )


  }










  getFollows(token: string): Observable <any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    const url = `${this.baseUrl}/profile/follow`;
    return this.http.post<any>(url, null, { headers });
  }











  buscarUsuarios(username : string){
    const url = `${this.baseUrl}/profile/buscar`;
    const body = {username};

    return this.http.post<ObtenerProfile>(url, body)
          .pipe(
            map(resp => {
              this.perfilesBuscados = resp.userProfile;

              localStorage.setItem('PerfilesBuscados', JSON.stringify(this.perfilesBuscados));
              console.log(this.perfilesBuscados);
              return resp.userProfile.length > 0;
            }),
            catchError(err => of(false))
          );
  }


  sugerirUsuarios(username: string){
    const url = `${this.baseUrl}/sugerencia`;
    const body = {username};

    return this.http.post<ObtenerProfile>(url,body)

  }


}
