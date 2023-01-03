import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
