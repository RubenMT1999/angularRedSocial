import { UserProfile } from './../../interfaces/interfaceProfile';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfileService } from './../../services/profile.service';
import { AuthService } from './../../../auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {

  get obtenerProfile(){
    return this.profileService.profile;
  }


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private profileService: ProfileService,
              private router: Router,
              private validatorService: ValidatorService){}

  

  miFormulario: FormGroup = this.fb.group({
    name: [this.profileService.profile.name, [Validators.required, Validators.minLength(3)]],
    bio: [this.profileService.profile.bio, [Validators.maxLength(40)]],
    website_url: [this.profileService.profile.weburl],
    twitter_username: [this.profileService.profile.username, [Validators.required, Validators.minLength(5)]],
    company: [this.profileService.profile.empresa],
    location: [this.profileService.profile.direccion],
    phone_number: [this.profileService.profile.phone_number],
    date_of_birth: [this.formatDate(this.profileService.profile.fecha), [this.validatorService.dateValidator]],
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


  editProfile(){
    const { name, bio, website_url, twitter_username,
      company, location, phone_number, date_of_birth } = this.miFormulario.value;


    const usermail = this.authService.usuario.username!;
    console.log(this.miFormulario.value);

    this.profileService.setProfile(name, bio, website_url, twitter_username,
      company,location,date_of_birth,usermail,phone_number)
            .subscribe(resp => {
              if(resp){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Tu perfil ha sido editado con éxito',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.profileService.userProfile = {
                  name: this.miFormulario.value.name!,
                  bio: this.miFormulario.value.bio!,
                  weburl: this.miFormulario.value.website_url!,
                  username: this.miFormulario.value.twitter_username!,
                  empresa: this.miFormulario.value.company!,
                  direccion: this.miFormulario.value.location!,
                  phone_number:this.miFormulario.value.phone_number!,
                  fecha: this.miFormulario.value.date_of_birth!
                };
                /* console.log(this.profileService.profile); */
                this.router.navigateByUrl('dashboard');
              }else{
                Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
              }
            });
  }


  campoEsValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }


}
