import { UserProfile } from './../../interfaces/interfaceProfile';

import { Router } from '@angular/router';
import { ProfileService } from './../../services/profile.service';
import { AuthService } from './../../../auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private profileService: ProfileService,
              private router: Router){}

  ngOnInit(): void {
  }

  

  get obtenerProfile(){
      return this.profileService.profile;
    }


  miFormulario: FormGroup = this.fb.group({
    name: [this.profileService.profile.name, [Validators.required, Validators.minLength(3)]],
    bio: [this.profileService.profile.bio],
    website_url: [this.profileService.profile.weburl],
    twitter_username: [this.profileService.profile.username, [Validators.required, Validators.minLength(5)]],
    company: [this.profileService.profile.empresa],
    location: [this.profileService.profile.direccion],
    date_of_birth: [this.formatDate(this.profileService.profile.fecha)],
  });

/*   this.miFormulario.get('date_of_birth').patchValue(this.formatDate(new Date())); */
    private formatDate(date:any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  //
  // editProfile(){
  //   const { name, bio, website_url, twitter_username,
  //     company, location, date_of_birth } = this.miFormulario.value;
  //
  //
  //   const usermail = this.authService.usuario.username!;
  //   console.log(this.miFormulario.value);
  //
  //   this.profileService.setProfile(name, bio, website_url, twitter_username,
  //     company,location,date_of_birth,usermail)
  //           .subscribe(resp => {
  //             if(resp){
  //               Swal.fire({
  //                 position: 'center',
  //                 icon: 'success',
  //                 title: 'Tu perfil ha sido editado con éxito',
  //                 showConfirmButton: false,
  //                 timer: 1500
  //               });
  //               this.profileService.userProfile = {
  //                 name: this.miFormulario.value.name!,
  //                 bio: this.miFormulario.value.bio!,
  //                 weburl: this.miFormulario.value.website_url!,
  //                 username: this.miFormulario.value.twitter_username!,
  //                 empresa: this.miFormulario.value.company!,
  //                 direccion: this.miFormulario.value.location!,
  //                 fecha: this.miFormulario.value.date_of_birth!
  //               };
  //               /* console.log(this.profileService.profile); */
  //               this.router.navigateByUrl('dashboard');
  //             }else{
  //               Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
  //             }
  //           });
  // }


  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


}
