import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './pages/user-profile/profile-settings/profile-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavProfileComponent } from './pages/user-profile/nav-profile/nav-profile.component';
import { PostsProfileComponent } from './pages/user-profile/posts-profile/posts-profile.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { SiguiendoComponent } from './pages/search-user/siguiendo/siguiendo.component';
import { SeguidoresComponent } from './pages/search-user/seguidores/seguidores.component';
import { PostsSearchComponent } from './pages/search-user/posts-search/posts-search.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileSettingsComponent,
    NavProfileComponent,
    PostsProfileComponent,
    SearchUserComponent,
    SiguiendoComponent,
    SeguidoresComponent,
    PostsSearchComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfileModule { }
