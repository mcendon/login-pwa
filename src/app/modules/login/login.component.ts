import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .padlock {
        max-width: 90px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
  }

  resetForm = () => {
    this.loginForm.reset({ email: '', password: '' });
  }

  get emailIsInvalid(): boolean {
    return this.fieldIsInvalid('email');
  }

  get passwordIsInvalid(): boolean {
    return this.fieldIsInvalid('password');
  }

  fieldIsInvalid = (name: string) => {
    const field = this.loginForm.get(name);
    return field.invalid && field.touched;
  }

  login = () => {
    const form = this.loginForm;
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait.',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    this.auth
      .login(form.get('email').value, form.get('password').value)
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
  }
}
