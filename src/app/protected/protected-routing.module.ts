import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../protected/dashboard/dashboard.component';

const routes: Routes = [

  {
    path:'',
    children: [
      {path:'', component: DashboardComponent},
      {path: '**', redirectTo:''}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
