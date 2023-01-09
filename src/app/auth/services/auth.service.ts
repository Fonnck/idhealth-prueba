import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;
    const body = { correo: email, password: password };

    return this.http.post<AuthResponse>(url, body)
    .pipe(catchError((err) =>  of(err) ))
  }
}
