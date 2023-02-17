import { PostsProfileComponent } from './pages/user-profile/posts-profile/posts-profile.component';
import { DashboardComponent } from './../protected/dashboard/dashboard.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {path:'user', component: UserProfileComponent, children: [
        {path: '', component: PostsProfileComponent},
        {path:':settings', component: ProfileSettingsComponent},
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
