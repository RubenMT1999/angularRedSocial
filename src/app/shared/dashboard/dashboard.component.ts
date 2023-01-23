import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

import { ProfileService } from '../../profile/services/profile.service';
import { UserProfile } from '../../profile/interfaces/interfaceProfile';

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
              private auth: AuthService,
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

  buscar(){
    console.log(this.termino);

    this.profileService.buscarUsuarios(this.termino)
        .subscribe(resp => {
          if(resp){
            this.router.navigateByUrl('profile/search')
          }else{
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

    this.profileService.buscarUsuarios(termino)
      .subscribe(valor => {
        if(valor){
          this.perfilesSugeridos = this.profileService.perfilesBuscados.splice(0,3);
        }
      })

  }

}

