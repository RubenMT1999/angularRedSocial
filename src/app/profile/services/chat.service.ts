import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { ChatStatus, ListadoMensajes, ListaPersonalizada } from '../interfaces/interfaceChat';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl: string = environment.baseUrl;

  private mensajes: any;

  private mensajesMios: any;

  get listaMensajes(){
    return this.mensajes;
  }

  get listaMensajesMios(){
    return this.mensajesMios;
  }

  constructor(private http: HttpClient) { }

  crearMensaje(texto?:string, creation_date?:Date, usernameReceptor?:string){
    const url = `${this.baseUrl}/message/create`;
    const body = {texto, creation_date, usernameReceptor};
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<ChatStatus>(url,body, {headers})
    .pipe(
      map(resp => {
        return resp.status!=null;
      }),
      catchError(err => of(false))
    )
  }


  listarMensajes(usernameReceptor?: string){
    const url = `${this.baseUrl}/message/listarMessages`;
    const body = {usernameReceptor};
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<ListadoMensajes>(url,body, {headers})
    .pipe(
      map(resp => {
        this.mensajes = resp.listaMensajes;

        return resp.listaMensajes?.length != 0
      }),
      catchError(err => of(false))
    );

  }


  listarMensajesMios(usernameReceptor?: string){
    const url = `${this.baseUrl}/message/listarMessagesMios`;
    const body = {usernameReceptor};
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token') || '');

    return this.http.post<ListadoMensajes>(url,body, {headers})
    .pipe(
      map(resp => {
        this.mensajesMios = resp.listaMensajes;

        return resp.listaMensajes?.length != 0
      }),
      catchError(err => of(false))
    );

  }



}
