import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  time: number;
  constructor(private auth: AuthService, private router: Router) {
    let lastSignInTime = auth.getLastSignInTime();
    if (lastSignInTime !== null) {
      this.time = new Date().getTime() - lastSignInTime;
    }
  }

  logout = () => {
    this.auth.logout().then(() => {
      this.router.navigate(['login']);
    });
  };

  ngOnInit(): void {}
}
