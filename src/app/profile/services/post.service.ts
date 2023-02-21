import { Injectable } from '@angular/core';
import { PostFollower } from './../interfaces/interfacePost';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ProfileStatus } from '../interfaces/interfaceProfile';
import { catchError, map, of } from 'rxjs';
import { PostsUsers, ArrayPostUsers, PostStatus, ArrayPostFollowers } from '../interfaces/interfacePost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = environment.baseUrl;

  public usuarioPosts!: PostsUsers[];

  public usuarioPostsFollower!: PostFollower[]

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

    obtenerPostsFollowers(email?: string){
    const url = `${this.baseUrl}/post/user`;
    const body = {email};

    return this.http.post<ArrayPostFollowers>(url,body)
      .pipe(
        map(resp => {

          console.log((resp))
          this.usuarioPostsFollower = resp.userPosts!;

          return resp.userPosts?.length != 0
        }),
        catchError(err => of(false))
      );
  }



  borrarPost(id: number){
    const url = `${this.baseUrl}/post/delete`;
    const options = {
      body: {
        id: id
      }
    };

    return this.http.delete<PostStatus>(url, options)
      .pipe(
        map(resp => {
          return resp.status == 'Post Eliminado'
        }),
        catchError(err => of(false))
      );
  }




}
