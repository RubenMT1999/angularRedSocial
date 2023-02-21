import { Component } from '@angular/core';
import {AuthService} from "../../../../auth/services/auth.service";
import {PostService} from "../../../services/post.service";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-posts-profile',
  templateUrl: './posts-profile.component.html',
  styleUrls: ['./posts-profile.component.css']
})
export class PostsProfileComponent {

  public someValue:string= '';
  ngOnInit() {
    this.listarPost();
  }

  get obtenerPost(){
    return this.postService.usuarioPosts;
  }

  constructor(private authService: AuthService,
              private postService: PostService,
              private profileService: ProfileService) {
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

}
