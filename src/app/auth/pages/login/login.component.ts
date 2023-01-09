import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const { correo, password } = this.loginForm.value;

    this.authService.login(correo, password)
    .subscribe((resp: AuthResponse | any) => {
    console.log(resp);
      if (resp.token) {
        const authInfo = JSON.stringify(resp);
        localStorage.setItem('auth', authInfo);
        this.router.navigateByUrl('/dashboard')
      } else {
        alert('Hpta que rico')
      }
    });
  }
}
