import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../shared/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private followersService: GithubFollowersService) { }

  ngOnInit() {
  }

}