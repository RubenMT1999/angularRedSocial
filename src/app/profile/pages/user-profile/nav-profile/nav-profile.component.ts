import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";



@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.css']
})
export class NavProfileComponent implements OnInit{




  ngOnInit(): void {
    this.obtenerMisSeguidores();
  }


  get obtenerProfile() {
    return this.profileService.profile;
  }

  get obtenerSeguidores(){
    return this.profileService.users;
  }


  get obtenerUser() {
    return this.authService.usuario;
  }






  constructor(private profileService: ProfileService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  onEditProfile() {
    this.router.navigateByUrl('/profile/user/settings')
    // this.router.navigateByUrl('setting')
  }



  obtenerMisSeguidores(){

    this.profileService.getUser().subscribe(resp => {

    });

  }




}
