import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from './../../interfaces/interfaceProfile';
import { ProfileService } from './../../services/profile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.authService.usuario;
  }

  constructor(private profileService: ProfileService,
              private authService: AuthService){
  }

}
