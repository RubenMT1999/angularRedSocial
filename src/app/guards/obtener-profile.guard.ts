import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileService } from './../profile/services/profile.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProfileGuard implements CanActivate {

  constructor(private profileService: ProfileService,
              private authService: AuthService,
              private router: Router){}

canActivate(): Observable<boolean> | boolean{
  const usermail = this.authService.usuario.username!;

  return this.profileService.getProfile(usermail)
    
    
}

/* canLoad(): Observable<boolean> | boolean{
  console.log('canLoadProfile')

  const usermail = this.authService.usuario.username!;

  return this.profileService.getProfile(usermail);
} */

}
