import { DashboardComponent } from '../protected/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    
    children: [
        { path: '', component:  IndexComponent},
        {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
