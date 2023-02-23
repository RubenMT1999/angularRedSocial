import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserProfile } from '../../interfaces/interfaceProfile';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit{

  public usersBuscados: UserProfile[] = [];
  mensajeEnviado: string = '';
  fecha: any;

  get obtenerBuscados(){
    //para obtener los datos del usuario buscado. Debo obtenerlo del localStorage porque sino
    //al recargar la página pierdo los datos.
    this.usersBuscados = JSON.parse(localStorage.getItem('PerfilesBuscados')!)
    return this.usersBuscados;
  }

  get todosLosMensajes(){
    return this.chatService.listaMensajes;
  }


  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.listarMensajes(this.obtenerBuscados[0].username)
  }


  crearMensaje(texto?:string, creation_date?:Date, usernameReceptor?:string){
    const currentDate = new Date();
    var newDateObj = moment(currentDate).add(1, 'h').toDate();

    this.fecha = newDateObj;

    this.chatService.crearMensaje(this.mensajeEnviado, this.fecha, this.obtenerBuscados[0].username)
      .subscribe(resp => {
        console.log(resp);
        console.log(this.todosLosMensajes)
      })
  }


  listarMensajes(usernameReceptor?:string){
    this.chatService.listarMensajes(usernameReceptor)
      .subscribe(resp => {

      });
  }







}
