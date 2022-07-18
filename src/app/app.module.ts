import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'followers', component: FollowersComponent}
]
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, PostsComponent, NavbarComponent, HomeComponent, FollowersComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
