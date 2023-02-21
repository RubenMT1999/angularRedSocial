import { PostService } from './../../../profile/services/post.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.css']
})
export class PostsSectionComponent {

  ngOnInit() {
    this.listarPost();
  }

  get obtenerPostFollowers(){
    return this.postService.usuarioPostsFollower;
  }

  constructor(private authService: AuthService,
              private postService: PostService) {
  }

  listarPost(){
    const usermail = this.authService.usuario.username!;

    this.postService.obtenerPostsFollowers(usermail)
      .subscribe(resp =>{

      })
  }

}
