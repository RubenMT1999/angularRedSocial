import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavProfileComponent } from './pages/user-profile/nav-profile/nav-profile.component';
import { PostsProfileComponent } from './pages/user-profile/posts-profile/posts-profile.component';


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    UserProfileComponent,
    NavProfileComponent,
    PostsProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
