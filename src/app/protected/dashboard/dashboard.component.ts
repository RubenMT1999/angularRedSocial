import { LoginComponent } from './../../auth/pages/login/login.component';

import { AuthService } from './../../auth/services/auth.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject, debounceTime, catchError } from 'rxjs';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { UserProfile, ObtenerProfile } from '../../profile/interfaces/interfaceProfile';
 // import theme = require("tailwindcss/defaultTheme");

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  showFiller = false;

  debouncer: Subject<string> = new Subject();

  termino: string = '';


  perfilesSugeridos: UserProfile[] = [];


  get usuario(){
    return this.auth.usuario;
  }

  constructor(private router: Router,
              private auth: AuthService,private profileService: ProfileService){}


  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.auth.usuario;
  }



  logout(){
    this.router.navigateByUrl('/auth')
  }

  profileSettings(){
    this.router.navigateByUrl('/profile/settings')
  }

  userProfile(){
    this.router.navigateByUrl('/profile/user')
  }

  onDarkMode(){

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

// Whenever the user explicitly chooses light mode
    localStorage['theme'] = 'light'

// Whenever the user explicitly chooses dark mode
    localStorage['theme'] = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')

  }


  ngOnInit() {
    this.debouncer
      //no hagas el subscribe hasta que pasen 300ms
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.sugerencias(valor);
      });
  }

  get profile(){
    return this.profileService.profile;
  }

  buscar(){
    console.log(this.termino);

    this.profileService.buscarUsuarios(this.termino)
      .subscribe(resp => {
        //debo activar el obtener-profile.guard para obtener primero el profile username,
        //de lo contrario username ser?? undefined.
        if(this.termino == this.profile.username){
          this.router.navigateByUrl('profile/user')
        }

        else if(resp) {
          console.log(resp)
          const currentUrl = 'profile/search';
          this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
          });
        }
        else{
          const links = document.querySelectorAll('.form-control');
          links.forEach(elem => {
            elem.classList.add('is-invalid');
          })
        }

      })
  }

  teclaPresionada(event: any){
    this.debouncer.next(this.termino);
  }


  sugerencias( termino:string ){
    const links = document.querySelectorAll('.form-control');
    links.forEach(elem => {
      elem.classList.remove('is-invalid');
    })

    this.profileService.sugerirUsuarios(termino)
      .subscribe(resp => {
        if(resp && termino.length>0){
          this.perfilesSugeridos = resp.userProfile.splice(0,3);
        }else{
          this.perfilesSugeridos = [];
        }
      });

  }




}
