import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from 'src/app/profile/interfaces/interfaceProfile';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/profile/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';


@Component({
  selector: 'app-posts-profile',
  templateUrl: './posts-profile.component.html',
  styleUrls: ['./posts-profile.component.css']
})
export class PostsProfileComponent implements OnInit{

  public someValue:string= '';

  

  miFormulario: FormGroup = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(50)]],
    image: ['prueba', [Validators.required, Validators.maxLength(50)]],
    relio: 5,
    publication_date: new Date()
  });

  constructor(private fb: FormBuilder,
    private profileService: ProfileService,
    private authService: AuthService,
    private postService: PostService,
    private router: Router){
  }

  ngOnInit(): void {
    
  }
  get obtenerProfile(){
    return this.profileService.profile;
  }

  get obtenerUser(){
    return this.authService.usuario;
  }

  get obtenerPosts(){
    return this.postService.usuarioPosts;
  }

  userPost(){
    const { message, image, relio, publication_date } = this.miFormulario.value;
    const usermail = this.authService.usuario.username!;

    console.log(this.miFormulario.value);

    this.postService.crearPost(usermail, message, image, relio, publication_date)
      .subscribe(resp => {
        if(resp){


          //limpiamos el valor del input.
          this.someValue= '';
          //ejecutamos onInit para refrescar la página y aparezca el mensaje.
          this.ngOnInit();
      }else{

      }
    
  })
}


  listarPosts(){
    const usermail = this.authService.usuario.username;

    this.postService.obtenerPosts(usermail)
      .subscribe(resp => {
        
      })
  }

  // borrarPost(id: number){ (result: number) => {
  //     if (result.isConfirmed) {
  //       this.postService.borrarPost(id)
  //         .subscribe(resp => {
  //       })

  //       this.ngOnInit();
  //     }
  //   }
  // }

}
