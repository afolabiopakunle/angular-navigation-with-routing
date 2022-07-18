import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GithubFollowersService {

  constructor(private http: HttpClient) {
    // super('https://api.github.com/users/mosh-hamedani/followers', http);
  }

  getFollowers() {
    return this.http.get('https://api.github.com/users/mosh-hamedani/followers')
  }
}