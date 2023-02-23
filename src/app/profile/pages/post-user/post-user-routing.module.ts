import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../../protected/dashboard/dashboard.component";
import {ProfileSettingsComponent} from "../profile-settings/profile-settings.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {SearchUserComponent} from "../../../search-user/search-user/search-user.component";
import {PostUserComponent} from "./post-user.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {path:'', component: PostUserComponent},
      {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostUserRoutingModule {

}
