import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import {PostUserComponent} from "./pages/post-user/post-user.component";


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    UserProfileComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
