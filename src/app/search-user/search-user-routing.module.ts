import { SearchUserComponent } from './../search-user/component-search/search-user.component';

import { UserProfileComponent } from './../profile/pages/user-profile/user-profile.component';
import { DashboardComponent } from './../protected/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {ObtenerProfileGuard} from "../guards/obtener-profile.guard";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
        {path:'search', component: SearchUserComponent},
      {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingComponent { }
