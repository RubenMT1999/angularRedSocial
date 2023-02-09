import {Component} from "@angular/core";
import {PostUserModule} from "./post-user.module";
import {PostService} from "../../services/post.service";
import {AuthService} from "../../../auth/services/auth.service";
import {exhaustMap} from "rxjs";

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})


export class PostUserComponent{

  get obtenerPosts(){
    return this.postService.obtenerPosts;
  }

  constructor(private authService: AuthService,
              private postService: PostService) {
  }


  usermail = this.authService.usuario.username!;





}


