import { map, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfile, ProfileStatus, ObtenerProfile } from './../interfaces/interfaceProfile';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string = environment.baseUrl;

  public userProfile!: UserProfile;

  public perfilesBuscados!: UserProfile[];

  get profile(){
    return this.userProfile;
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
                fecha: resp.userProfile[0].date_of_birth?.date,
                phone_number: resp.userProfile[0].phone_number
              } 

              return true;
            }),
            catchError(err => of(true))
          )
  }


  buscarUsuarios(username : string){
    const url = `${this.baseUrl}/profile/buscar`;
    const body = {username};

    return this.http.post<ObtenerProfile>(url, body)
          .pipe(
            map(resp => {
              console.log(resp);

              this.perfilesBuscados = resp.userProfile;

              console.log(this.perfilesBuscados);
              return resp.userProfile.length > 0;
            }),
            catchError(err => of(false))
          );
  }


}
