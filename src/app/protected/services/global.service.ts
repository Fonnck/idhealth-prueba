import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UsersResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<UsersResponse>(`${this.baseUrl}/usuarios`)
  }

}
