import { Component } from '@angular/core';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  get obtenerBuscados(){
    return this.profileService.buscados;
  }
  

  constructor(private profileService: ProfileService){}

 

}
