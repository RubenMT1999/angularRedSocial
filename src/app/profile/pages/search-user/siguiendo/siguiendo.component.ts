import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/profile/services/followers.service';
import { DashboardComponent } from 'src/app/protected/dashboard/dashboard.component';

@Component({
  selector: 'app-siguiendo',
  templateUrl: './siguiendo.component.html',
  styleUrls: ['./siguiendo.component.css']
})
export class SiguiendoComponent implements OnInit{

  constructor(private followersService: FollowersService, private dashboardComponent: DashboardComponent){}

  ngOnInit(): void {
    
  }

  get nombreSeguidores(){
    return this.followersService.listaSeguidores;
  }

  perfilSeguidores(twitterUsername:string){

    this.dashboardComponent.termino = twitterUsername;
    this.dashboardComponent.buscar();
    this.ngOnInit();
  }

}
