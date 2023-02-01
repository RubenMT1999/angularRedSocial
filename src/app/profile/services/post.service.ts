import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ProfileStatus } from '../interfaces/interfaceProfile';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = environment.baseUrl;

/*   public postUsuario!: ; */

  constructor(private http: HttpClient) { }

  crearPost(id_user_id?:string, message?:string, image?:string, relio?:number, publication_date?:Date){
    const url = `${this.baseUrl}/post/create`;
    const body = {id_user_id, message, image, relio, publication_date};

    return this.http.post<ProfileStatus>(url, body)
      .pipe(
        map(resp => {
          console.log(resp);
          return resp.status != null;
        }),
        catchError(err => of(false))
      )
  }

}
