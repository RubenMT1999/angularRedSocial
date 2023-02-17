import { Component } from '@angular/core';
import {ProfileService} from "../../../profile/services/profile.service";
import {AuthService} from "../../../auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.css']
})
export class NavSectionComponent {

  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.authService.usuario;
  }

  constructor(private profileService: ProfileService,
              private authService: AuthService,
              private route: ActivatedRoute, private router: Router){
  }

}
