import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import { CommentsInterface, CommentsPost, commentsUser} from "../interfaces/interfaceComments";
import {catchError, map, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ArrayPostFollowers, PostFollower} from "../interfaces/interfacePost";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseUrl: string = environment.baseUrl;

  public commentsPosts!: CommentsPost[];

  constructor(private http: HttpClient) { }

  crearComments(message?:string, id_post_id?:number, id_user_id?:string,  date_comments?:Date){
    const url = `${this.baseUrl}/comments/create`;
    const body = {message, id_post_id, id_user_id, date_comments};

    return this.http.post<CommentsInterface>(url, body)
      .pipe(
        map(resp => {
          console.log(resp);
          return resp.status != null;
        }),
        catchError(err => of(false))
      )
  }

  obtenerCommentsPost(id_post?: number){
    const url = `${this.baseUrl}/comments/post`;
    const body = {id_post};

    return this.http.post<commentsUser>(url,body)
      .pipe(
        map(resp => {
          this.commentsPosts = resp.commentsUser!;
          return resp.commentsUser?.length != 0
        }),
        catchError(err => of(false))
      );
  }

  // obtenerCommentsPost(id_post?: number){
  //   const url = `${this.baseUrl}/comments/post`;
  //   const body = {id_post};
  //
  //   return this.http.post<ArrayCommentsPost>(url,body)
  //     .pipe(
  //       map(resp => {
  //
  //         this.commentsPosts = resp.commentsPost!;
  //
  //         return resp.commentsPost?.length != 0
  //       }),
  //       catchError(err => of(false))
  //     );
  // }







}
