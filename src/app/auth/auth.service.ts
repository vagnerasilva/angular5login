import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  
  get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
  }
  constructor(
    private router: Router
  ) {}

  login(user: User){
    console.log(user)
    if (user.userName !== '' && user.password != '' ) { // {3}
      console.log("true to aqui ")
      this.loggedIn.next(true);
      this.router.navigate(['/']);
      console.log(this.loggedIn)
    }
  }
  logout() {   
    console.log("fazendo logout")                         // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
