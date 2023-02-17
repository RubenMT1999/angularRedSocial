import { AuthService } from './../../auth/services/auth.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, catchError } from 'rxjs';

import { ProfileService } from '../../profile/services/profile.service';
import { UserProfile, ObtenerProfile } from '../../profile/interfaces/interfaceProfile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  showFiller = false;

  perfilesSugeridos: UserProfile[] = [];

  constructor(private router: Router,
              private authService: AuthService,
              private profileService: ProfileService){}


  ngOnInit() {
    this.debouncer
      //no hagas el subscribe hasta que pasen 300ms
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.sugerencias(valor);
    });
  }


  get usuario(){
    return this.authService.usuario;
  } 
  
  get profile(){
    return this.profileService.profile;
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
            const currentUrl = 'profile/search';
            this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
            });

           /*  this.router.navigateByUrl('profile/search') */
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

