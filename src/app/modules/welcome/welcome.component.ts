import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  time: number;
  userDisplayName: string;
  constructor(private auth: AuthService, private router: Router) {
    this.setWelcomePageData();
  }

  setWelcomePageData = () => {
    const lastSignInTime = this.auth.getLastSignInTime();
    this.auth.getUser().subscribe(user => {
      if (user) {
        this.userDisplayName = user.displayName || 'Anonymous';
      }
    });
    if (lastSignInTime) {
      this.time = new Date().getTime() - lastSignInTime;
    }
  }

  logout = () => {
    this.auth.logout().then(() => {
      this.router.navigate(['login']);
    });
  }

  ngOnInit(): void {}
}
