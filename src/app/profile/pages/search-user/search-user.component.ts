import { Component } from '@angular/core';
import {UserProfile} from "../../interfaces/interfaceProfile";
import {ProfileService} from "../../services/profile.service";

import {DashboardComponent} from "../../../protected/dashboard/dashboard.component";
import {FollowersService} from "../../services/followers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {


  public usersBuscados: UserProfile[] = [];

  public totalSeguidores:any;

  public siguiendo:boolean = false;

  constructor(private profileService: ProfileService,
              private followersService: FollowersService,
              private dashboardComponent: DashboardComponent,
              private router: Router){}

  get numeroSeguidos(){
    return this.followersService.numeroSeguidos;
  }

  get nombreSeguidores(){
    return this.followersService.listaSeguidores;
  }



  get obtenerProfile(){
    return this.profileService.profile;
  }

  get numeroSeguidores(){
    return this.followersService.verNumeroSeguidores;
  }

  get perfilDeQuienMeSigue(){
    return this.followersService.listarQuienMeSigue;
  }



  ngOnInit(): void {
    this.followersService.obtenerNumeroSeguidores(this.obtenerBuscados[0].username);
    this.followersService.listarSeguidores(this.obtenerBuscados[0].username);
    this.loSigues(this.obtenerProfile.username!, this.obtenerBuscados[0].username!);
    this.followersService.verMisSeguidores(this.obtenerBuscados[0].username);
    this.followersService.obtenerUsernameSeguidores(this.obtenerBuscados[0].username);
  }
  get obtenerBuscados(){
    //para obtener los datos del usuario buscado. Debo obtenerlo del localStorage porque sino
    //al recargar la página pierdo los datos.
    this.usersBuscados = JSON.parse(localStorage.getItem('PerfilesBuscados')!)
    return this.usersBuscados;
  }


  seguirUsuario(twitterUsername:string){

    this.followersService.seguirUsuario(twitterUsername)
      .subscribe(resp => {
        if(resp){

        }
        this.ngOnInit();
      });

  }


  perfilSeguidores(twitterUsername:string){

    this.dashboardComponent.termino = twitterUsername;
    this.dashboardComponent.buscar();
    this.ngOnInit();
  }


  loSigues(usernameEmisor:string, usernameReceptor:string){
    this.followersService.loSigue(usernameEmisor,usernameReceptor)
      .subscribe(resp => {
        if(resp){
          this.siguiendo = true;
        }else{
          this.siguiendo = false;
        }
      });
  }


  dejarSeguir(twitter_username?:string){
    this.followersService.dejarDeSeguir(twitter_username)
      .subscribe(resp => {
        if(resp){

        }
        this.ngOnInit();
      });
  }

  verSiguiendo(){
    this.router.navigateByUrl('/profile/search/siguiendo')
  }
  verSeguidores(){
    this.router.navigateByUrl('/profile/search/seguidores')
  }


}
