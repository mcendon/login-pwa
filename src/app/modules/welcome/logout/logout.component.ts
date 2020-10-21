import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  template: `<button class="btn btn-danger" (click)="logout()">Logout</button>`,
})
export class LogoutComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout = () => {
    this.auth.logout().then(() => {
      this.router.navigate(['login']);
    });
  };
}
