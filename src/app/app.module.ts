import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: HomeComponent}
]
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, PostsComponent, NavbarComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
