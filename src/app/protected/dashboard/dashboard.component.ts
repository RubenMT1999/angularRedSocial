import { LoginComponent } from './../../auth/pages/login/login.component';

import { AuthService } from './../../auth/services/auth.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, catchError } from 'rxjs';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { UserProfile, ObtenerProfile } from '../../profile/interfaces/interfaceProfile';

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

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }

    // Whenever the user explicitly chooses light mode
    localStorage['theme'] = 'light'

    // Whenever the user explicitly chooses dark mode
    localStorage['theme'] = 'dark'

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
          //de lo contrario username será undefined.
          if(this.termino == this.profile.username){
            this.router.navigateByUrl('profile/user')
          }
          else if(resp){
            this.router.navigateByUrl('profile/search')
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
