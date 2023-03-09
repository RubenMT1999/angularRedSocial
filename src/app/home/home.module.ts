import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AsideSectionComponent } from './index/aside-section/aside-section.component';
import { NavSectionComponent } from './index/nav-section/nav-section.component';
import { PostsSectionComponent } from './index/posts-section/posts-section.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AsideSectionComponent,
    NavSectionComponent,
    PostsSectionComponent,
    IndexComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class HomeModule { }
