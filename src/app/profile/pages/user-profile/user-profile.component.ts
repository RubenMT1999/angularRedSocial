import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from './../../interfaces/interfaceProfile';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  public someValue:string= '';

  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.authService.usuario;
  }

  get obtenerPosts(){
    return this.postService.usuarioPosts;
  }

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              private authService: AuthService,
              private postService: PostService,
              private router: Router){
  }

  ngOnInit() {
    this.listarPosts();
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

          //limpiamos el valor del input.
          this.someValue= '';
          //ejecutamos onInit para refrescar la página y aparezca el mensaje.
          this.ngOnInit();
      }else{
        Swal.fire('Error','Ha habido algún error al crear el post','error');
      }
    
  })
}


  listarPosts(){
    const usermail = this.authService.usuario.username;

    this.postService.obtenerPosts(usermail)
      .subscribe(resp => {
        
      })
  }


  borrarPost(id: number){

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se perderá tu comentario para siempre!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.postService.borrarPost(id)
          .subscribe(resp => {
        })

        Swal.fire(
          'Eliminado!',
          'Tu comentario a sido borrado.',
          'success'
        )
        this.ngOnInit();
      }
    })
  }


}
