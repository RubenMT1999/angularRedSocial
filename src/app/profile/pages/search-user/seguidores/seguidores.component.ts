import { Component } from '@angular/core';
import { FollowersService } from 'src/app/profile/services/followers.service';

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent {

  constructor(private followersService: FollowersService){}

  get nombreSeguidores(){
    return this.followersService.listaSeguidores;
  }

}
