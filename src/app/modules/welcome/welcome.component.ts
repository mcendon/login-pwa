import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  time: number;
  constructor(private auth: AuthService) {
    let lastSignInTime = auth.getLastSignInTime();
    if (lastSignInTime !== null) {
      this.time = new Date().getTime() - lastSignInTime;
    }
  }

  ngOnInit(): void {}
}
