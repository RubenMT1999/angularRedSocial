import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {getUndecoratedClassWithAngularFeaturesDiagnostic} from "@angular/compiler-cli/src/ngtsc/annotations/common";



@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.css']
})
export class NavProfileComponent implements OnInit{

  public numero = false;


  ngOnInit(){
    this.obtenerMisSeguidores();
    this.listarPostRelio();
    this.oneditNumero();
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

  onRelio() {
    this.router.navigateByUrl('/profile/user/relio')
  }
  onPerfil(){
    this.router.navigateByUrl('/profile/user')
  }
  oneditNumero(){
    if(this.obtenerRelioPost.length != 0){
      this.numero = true;
      }
    }

  get obtenerNumero(){
    return this.profileService.numerorelios;
  }
  get obtenerRelioPost(){
    return this.profileService.postRelios;
  }

  listarPostRelio(){

    this.profileService.obtenerRelio()
      .subscribe(resp =>{
        console.log(this.obtenerNumero);
      })
  }




  obtenerMisSeguidores(){

    this.profileService.getUser().subscribe(resp => {
      console.log(this.obtenerNumero.veces)

    });

  }




}
