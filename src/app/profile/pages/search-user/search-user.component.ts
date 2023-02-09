import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { DashboardComponent } from '../../../shared/dashboard/dashboard.component';
import { UserProfile } from '../../interfaces/interfaceProfile';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent{

  public usersBuscados: UserProfile[] = [];

  get obtenerBuscados(){
    //para obtener los datos del usuario buscado. Debo obtenerlo del localStorage porque sino
    //al recargar la página pierdo los datos.
    this.usersBuscados = JSON.parse(localStorage.getItem('PerfilesBuscados')!)
    return this.usersBuscados;
  }

  constructor(private profileService: ProfileService,
              private dashboardComponent: DashboardComponent){}


 

}
