import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ProfileStatus } from '../interfaces/interfaceProfile';
import { catchError, map, of } from 'rxjs';
import { PostsUsers, ArrayPostUsers } from '../interfaces/interfacePost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = environment.baseUrl;

  public usuarioPosts!: PostsUsers[]; 

  get postUsuarios(){
    return this.usuarioPosts;
  }

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


  obtenerPosts(email?: string){
    const url = `${this.baseUrl}/post/user/list`;
    const body = {email};

    return this.http.post<ArrayPostUsers>(url,body)
      .pipe(
        map(resp => {
          this.usuarioPosts = resp.userPosts!;

          return resp.userPosts?.length != 0
        }),
        catchError(err => of(false))
      );
  }



}
