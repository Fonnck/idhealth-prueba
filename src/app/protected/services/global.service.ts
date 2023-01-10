import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UsersResponse, Usuario } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UsersResponse>(`${this.baseUrl}/usuarios`);
  }

  createUser(user: Usuario) {
    return this.http.post<any>(`${this.baseUrl}/usuarios`, user);
  }

  updateUser(user: Usuario) {
    /* const token
    const headers: HttpHeaders = [{'x-token' : }] */
    const url = `${this.baseUrl}/usuarios/${user.uid}`;
    return this.http.put(url, user);
  }

  deleteUser(user: Usuario) {
    const url = `${this.baseUrl}/usuarios/${user.uid}`;
    return this.http.delete(url);
  }
}
