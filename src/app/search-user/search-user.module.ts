import { SearchUserComponent } from './component-search/search-user.component';
import { SearchRoutingComponent } from './search-user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavSearchUserComponent } from './component-search/nav-search-user/nav-search-user.component';
import { PostSearchUserComponent } from './component-search/post-search-user/post-search-user.component';


@NgModule({
  declarations: [
    SearchUserComponent,
    NavSearchUserComponent,
    PostSearchUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchRoutingComponent
  ]
})
export class SearchUserComponentModule { }
 