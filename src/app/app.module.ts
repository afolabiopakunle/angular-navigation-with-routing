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
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './shared/followers.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {path: '', redirectTo: 'followers', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'follower/:id/:username', component: ProfileComponent },
  {path: 'followers', component: FollowersComponent },
  {path: '**', component: NotFoundComponent }
]
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpClientModule ],
  declarations: [ AppComponent, PostsComponent, NavbarComponent, HomeComponent, FollowersComponent, ProfileComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubFollowersService]
})
export class AppModule { }
