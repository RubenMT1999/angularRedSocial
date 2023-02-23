import { DashboardComponent } from './../shared/dashboard/dashboard.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { ChatUserComponent } from './pages/chat-user/chat-user.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {path:'settings', component: ProfileSettingsComponent},
      {path:'user', component: UserProfileComponent},
      {path:'search', component: SearchUserComponent},
      {path:'chat', component: ChatUserComponent},
      {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
