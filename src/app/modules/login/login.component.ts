import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      img {
        max-width: 90px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
