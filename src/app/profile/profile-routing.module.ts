import { PostsProfileComponent } from './pages/user-profile/posts-profile/posts-profile.component';
import { DashboardComponent } from './../protected/dashboard/dashboard.component';
import { ProfileSettingsComponent } from './pages/user-profile/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {ObtenerProfileGuard} from "../guards/obtener-profile.guard";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {path:'user', component: UserProfileComponent, children: [
        { path: '', component: PostsProfileComponent},
        { path: 'settings', component: ProfileSettingsComponent},
      ]}, 
      {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
