import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { AsideSectionComponent } from './index/aside-section/aside-section.component';
import { NavSectionComponent } from './index/nav-section/nav-section.component';
import { PostsSectionComponent } from './index/posts-section/posts-section.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AsideSectionComponent,
    NavSectionComponent,
    PostsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
