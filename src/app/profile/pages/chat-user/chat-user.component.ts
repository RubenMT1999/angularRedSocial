import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserProfile } from '../../interfaces/interfaceProfile';
import * as moment from 'moment';
import { ListaPersonalizada } from '../../interfaces/interfaceChat';
import { ProfileService } from '../../services/profile.service';

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

  get todosLosMensajesMios(){
    return this.chatService.listaMensajesMios;
  }

  get obtenerProfile(){
    return this.profileService.profile;
  }

  constructor(private chatService: ChatService,
              private profileService: ProfileService){}

  ngOnInit(): void {
    this.listarMensajes(this.obtenerBuscados[0].username);
    this.listarMensajesMios(this.obtenerBuscados[0].username);
  }


  crearMensaje(){
    const currentDate = new Date();
    var newDateObj = moment(currentDate).add(1, 'h').toDate();

    this.fecha = newDateObj;

    this.chatService.crearMensaje(this.mensajeEnviado, this.fecha, this.obtenerBuscados[0].username)
      .subscribe(resp => {
        console.log(resp);
        this.ngOnInit();
      })
  }


  listarMensajes(usernameReceptor?:string){
    this.chatService.listarMensajes(usernameReceptor)
      .subscribe(resp => {
      });
  }

  listarMensajesMios(usernameReceptor?:string){
    this.chatService.listarMensajesMios(usernameReceptor)
      .subscribe(resp => {
      });
  }

  elMensajeEsMio(texto: string){
/*       const found: boolean = this.todosLosMensajes.listaPersonalizada.includes(this.todosLosMensajesMios.listaPersonalizada[0]);
      return found; */

    for(let i = 0; i<this.todosLosMensajesMios.length; i++){
      let variable = '';
      variable = this.todosLosMensajesMios[i]['texto']

      console.log(variable)

      if(variable === texto){
        console.log('es mio')
        return true;
      }
    }
    return false
  }


}