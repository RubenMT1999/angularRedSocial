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
  ngOnInit() {
    this.listarPost();
  }

  get obtenerPostFollowers(){
    return this.postService.usuarioPosts;
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


