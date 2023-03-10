import { Component } from '@angular/core';
import {AuthService} from "../../../../auth/services/auth.service";
import {PostService} from "../../../services/post.service";
import {ProfileService} from "../../../services/profile.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-posts-profile',
  templateUrl: './posts-profile.component.html',
  styleUrls: ['./posts-profile.component.css']
})
export class PostsProfileComponent {
  miFormulario: FormGroup = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(50)]],
    image: ['prueba', [Validators.required, Validators.maxLength(50)]],
    publication_date: new Date()
  });

  public someValue:string= '';
  ngOnInit() {
    this.listarPost();
    this.listarPostRelio();
  }

  get obtenerPost(){
    return this.postService.usuarioPosts;
  }
  get obtenerRelioPost(){
    return this.profileService.postRelios;
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private postService: PostService,
              private profileService: ProfileService) {
  }

  listarPostRelio(){

    this.profileService.obtenerRelio()
      .subscribe(resp =>{
        console.log(this.obtenerRelioPost);
      })
  }


  listarPost(){
    const usermail = this.authService.usuario.username!;

    this.postService.obtenerPosts(usermail)
      .subscribe(resp =>{
      })
  }
  get obtenerProfile(){
    return this.profileService.profile;
  }
  // postLike(id: number) {
  //   this.postService.crearLike(id)
  //     .subscribe(resp => {
  //       if(resp){
  //         //ejecutamos onInit para refrescar la página y aparezca el mensaje.
  //         this.ngOnInit();
  //       }else{
  //       }
  //     })
  // }

  userPost(){
    const { message, image,  publication_date } = this.miFormulario.value;
    const usermail = this.authService.usuario.username!;

    console.log(this.miFormulario.value);

    this.postService.crearPost(usermail, message, image,  publication_date)
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
  borrarPost(id: number) {
    this.postService.borrarPost(id)
      .subscribe(resp => {
        this.ngOnInit();
      })
  }
  postLike(id: number) {
    this.postService.crearLike(id)
      .subscribe(resp => {
        if(resp){
          this.ngOnInit();
        }else{
        }
      })
  }

  postRelio(id: number){
    this.postService.crearRelio(id)
      .subscribe(resp=>{
        if(resp){
          this.ngOnInit();
        }else{
        }
      })
  }

  postDisLike(id: number){
    this.postService.crearDisLike(id)
      .subscribe(resp => {
        if(resp){
          this.ngOnInit();
        }else {
        }
      })
  }



}
