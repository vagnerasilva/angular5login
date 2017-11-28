import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;

    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {
 testeheader : any;

// isLoggedIn$: Observable<boolean>;                  // {1}
isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    this.testeheader= this.isLoggedIn$
    console.log("Imprimindo Esconder ou nao o header observable")
    console.log(this.isLoggedIn$)// verificando se ta logado
    console.log("Imprimindo Esconder ou nao o header observable")
  }

  onLogout(){
    this.authService.logout();                      // {3}
  }

}
