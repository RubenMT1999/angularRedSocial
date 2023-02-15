import { LoginComponent } from './../../auth/pages/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showFiller = false;

  get usuario(){
    return this.auth.usuario;
  }

  constructor(private router: Router,
              private auth: AuthService,){}



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

}
