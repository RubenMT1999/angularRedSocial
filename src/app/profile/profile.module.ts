import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { ChatUserComponent } from './pages/chat-user/chat-user.component';


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    UserProfileComponent,
    SearchUserComponent,
    ChatUserComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfileModule { }
