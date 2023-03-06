
import { PostsProfileComponent } from './pages/user-profile/posts-profile/posts-profile.component';
import { DashboardComponent } from './../protected/dashboard/dashboard.component';
import { ProfileSettingsComponent } from './pages/user-profile/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {ObtenerProfileGuard} from "../guards/obtener-profile.guard";
import {SearchUserComponent} from "./pages/search-user/search-user.component";
import {SiguiendoComponent} from "./pages/search-user/siguiendo/siguiendo.component";
import {SeguidoresComponent} from "./pages/search-user/seguidores/seguidores.component";
import {PostsSearchComponent} from "./pages/search-user/posts-search/posts-search.component";
import { ChatUserComponent } from './pages/search-user/chat-user/chat-user.component';
import {ProfileRelioComponent} from "./pages/user-profile/profile-relio/profile-relio.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      { path: 'search', component: SearchUserComponent, children: [
          { path: '', component: PostsSearchComponent },
          { path: 'siguiendo', component: SiguiendoComponent },
          { path: 'seguidores', component: SeguidoresComponent },
          {path:'chat', component: ChatUserComponent},
        ] },
      {path:'user', component: UserProfileComponent, children: [
        { path: '', component: PostsProfileComponent},
        { path: 'settings', component: ProfileSettingsComponent},
          {path: 'relio', component: ProfileRelioComponent}
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
