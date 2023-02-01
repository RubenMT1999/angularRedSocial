import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from './../../interfaces/interfaceProfile';
import { ProfileService } from './../../services/profile.service';
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.authService.usuario;
  }

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              private authService: AuthService,
              private postService: PostService){
  }


  miFormulario: FormGroup = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(50)]],
    image: ['prueba', [Validators.required, Validators.maxLength(50)]],
    relio: 5,
    publication_date: new Date()
  });


  userPost(){
    const { message, image, relio, publication_date } = this.miFormulario.value;
    const usermail = this.authService.usuario.username!;

    console.log(this.miFormulario.value);

    this.postService.crearPost(usermail, message, image, relio, publication_date)
      .subscribe(resp => {
        if(resp){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Post se ha creado con éxito',
            showConfirmButton: false,
            timer: 1500
          });
      }else{
        Swal.fire('Error','Ha habido algún error al crear el post','error');
      }
    
  })
}

}
