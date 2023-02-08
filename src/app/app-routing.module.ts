import { ObtenerProfileGuard } from './guards/obtener-profile.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./shared/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard, ObtenerProfileGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [ValidarTokenGuard,ObtenerProfileGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'index',
    loadChildren: () => import('./profile/pages/post-user/post-user-routing.module').then(m => m.PostUserRoutingModule),
    canActivate: [ValidarTokenGuard,ObtenerProfileGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'**',
    redirectTo:'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
