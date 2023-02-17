import { Component } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.css']
})
export class NavProfileComponent {

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

  onEditProfile(){
    // this.router.navigate(['settings'], {relativeTo: this.route})
    this.router.navigateByUrl('setting')
  }


}
