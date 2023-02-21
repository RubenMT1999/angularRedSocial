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

}
