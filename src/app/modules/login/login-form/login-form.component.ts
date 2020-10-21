import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
    `
      button {
        width: 40%;
      }
    `,
  ],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  user: UserModel = new UserModel();

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm = () => {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  };

  resetForm = () => {
    this.loginForm.reset({ email: '', password: '' });
  };

  get emailIsInvalid() {
    return this.fieldIsInvalid('email');
  }

  get passwordIsInvalid() {
    return this.fieldIsInvalid('password');
  }

  fieldIsInvalid = (name: string) => {
    let field = this.loginForm.get(name);
    return field.invalid && field.touched;
  };

  login = () => {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait.',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    this.auth
      .login(this.user)
      .then((data) => {
        Swal.close();
        this.router.navigate(['welcome']);
      })
      .catch(() => {
        Swal.fire({
          title: 'Incorrect Login',
          icon: 'error',
          text: 'Your email or password is wrong.',
        });
        this.resetForm();
      });
  };
}
