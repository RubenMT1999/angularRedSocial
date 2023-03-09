import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/profile/services/followers.service';
import { DashboardComponent } from 'src/app/protected/dashboard/dashboard.component';

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent implements OnInit{

  
  constructor(private followersService: FollowersService, private dashboardComponent: DashboardComponent){}

  ngOnInit(): void {
    
  }

  get perfilDeQuienMeSigue(){
    return this.followersService.listarQuienMeSigue;
  }

  perfilSeguidores(twitterUsername:string){

    this.dashboardComponent.termino = twitterUsername;
    this.dashboardComponent.buscar();
    this.ngOnInit();
  }

}
