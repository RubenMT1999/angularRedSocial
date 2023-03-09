import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../../../auth/services/auth.service";
import {PostService} from "../../../services/post.service";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-profile-relio',
  templateUrl: './profile-relio.component.html',
  styleUrls: ['./profile-relio.component.css']
})
export class ProfileRelioComponent {

  ngOnInit() {
    this.listarPostRelio();
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private postService: PostService,
              private profileService: ProfileService) {
  }

  get obtenerRelioPost(){
    return this.profileService.postRelios;
  }

  listarPostRelio(){

    this.profileService.obtenerRelio()
      .subscribe(resp =>{
        console.log(this.obtenerRelioPost);
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
