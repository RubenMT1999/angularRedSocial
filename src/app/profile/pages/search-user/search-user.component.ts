import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { DashboardComponent } from '../../../shared/dashboard/dashboard.component';
import { UserProfile } from '../../interfaces/interfaceProfile';
import { FollowersService } from '../../services/followers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit{

  public usersBuscados: UserProfile[] = [];

  public totalSeguidores:any;

  get numeroSeguidores(){
    return this.followersService.numeroSeguidores;
  }

  get nombreSeguidores(){
    return this.followersService.listaSeguidores;
  }

  get obtenerBuscados(){
    //para obtener los datos del usuario buscado. Debo obtenerlo del localStorage porque sino
    //al recargar la página pierdo los datos.
    this.usersBuscados = JSON.parse(localStorage.getItem('PerfilesBuscados')!)
    return this.usersBuscados;
  }

  constructor(private profileService: ProfileService,
              private followersService: FollowersService,
              private dashboardComponent: DashboardComponent){}


  ngOnInit(): void {
    this.followersService.obtenerNumeroSeguidores(this.obtenerBuscados[0].username);
    this.followersService.listarSeguidores(this.obtenerBuscados[0].username);
  }

             
  seguirUsuario(twitterUsername:string){
    
    this.followersService.seguirUsuario(twitterUsername)
      .subscribe(resp => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has comenzado a seguir a '+ twitterUsername,
          showConfirmButton: false,
          timer: 1500
        });

      });

  }


  perfilSeguidores(twitterUsername:string){

    this.dashboardComponent.termino = twitterUsername;
    this.dashboardComponent.buscar();
    this.ngOnInit();
    console.log('ok');

  }



}
