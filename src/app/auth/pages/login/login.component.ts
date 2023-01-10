import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/utils';
import Swal from 'sweetalert2'
import { AuthResponse } from '../../interfaces';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern(emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  get correo() {
    return this.loginForm.get('correo');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    const { correo, password } = this.loginForm.value;

    this.authService
      .login(correo, password)
      .subscribe((resp: AuthResponse | any) => {
        console.log(resp);
        if (resp.token) {
          const userInfo = JSON.stringify(resp.usuario);
          const token = resp.token;
          localStorage.setItem('token', token);
          localStorage.setItem('user_session', userInfo);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/dashboard');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${resp.error.msg}`,
          })
        }
      });
  }
}
