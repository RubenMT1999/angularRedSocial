import { Injectable } from '@angular/core';
import { PostFollower } from './../interfaces/interfacePost';
import { environment } from '../../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  crearPost(id_user_id?:string, message?:string, image?:string, publication_date?:Date){
    const url = `${this.baseUrl}/post/create`;
    const body = {id_user_id, message, image, publication_date};

    return this.http.post<ProfileStatus>(url, body)
      .pipe(
        map(resp => {
          console.log(resp);
          return resp.status != null;
        }),
        catchError(err => of(false))
      )
  }

  crearLike(id_post?: number){
    const url = `${this.baseUrl}/post/addlike`;
    const body = {id_post};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<PostLike>(url,body,{headers})
      .pipe(
        map(resp => {
          console.log(resp);
          return resp.resultado != null;
        }),
        catchError(err => of(false))
      )
  }

  crearDisLike(id_post?: number){
    const url = `${this.baseUrl}/post/addDislike`;
    const body = {id_post};
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<PostLike>(url,body,{headers})
      .pipe(
        map(resp => {
          console.log(resp);
          return resp.resultado != null;
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
