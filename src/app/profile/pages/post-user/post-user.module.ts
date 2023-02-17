import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostUserRoutingModule } from './post-user-routing.module';
import {PostUserComponent} from "./post-user.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";


@NgModule({
  declarations: [PostUserComponent],
  imports: [
    CommonModule,
    PostUserRoutingModule
  ]
})
export class PostUserModule {
}
