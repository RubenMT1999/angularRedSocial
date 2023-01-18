import { LoginComponent } from './../../auth/pages/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileService } from '../../profile/services/profile.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  termino: string = 'Hola Mundo';

  showFiller = false;

  get usuario(){
    return this.auth.usuario;
  }

  constructor(private router: Router,
              private auth: AuthService,
              private profileService: ProfileService){}

  

  logout(){
    this.router.navigateByUrl('/auth')
  }

  profileSettings(){
    this.router.navigateByUrl('/profile/settings')
  }

  userProfile(){
    this.router.navigateByUrl('/profile/user')
  }

  buscar(){
    console.log(this.termino);

    this.profileService.buscarUsuarios(this.termino)
        .subscribe(resp => {
          console.log(resp);
        })
        
        
  

}
}

