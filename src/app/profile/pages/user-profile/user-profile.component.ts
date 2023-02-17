import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from './../../interfaces/interfaceProfile';
import { ProfileService } from './../../services/profile.service';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public router: Router, private route: ActivatedRoute) {
  }


}
