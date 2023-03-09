import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostUserModule} from "./post-user.module";
import {PostUserComponent} from "./post-user.component";
import {DashboardComponent} from "../../../shared/dashboard/dashboard.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {path:'' , component:PostUserComponent},
      {path:'**', redirectTo: 'index'}

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostUserRoutingModule { }
