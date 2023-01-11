import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryResponse, UsersResponse, Usuario } from '../interfaces';
import { Category, ProductResponse, Producto } from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  ////// USERS SERVICES //////

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

  ////// CATEGORIES SERVICES //////

  getCategories() {
    return this.http.get<CategoryResponse>(`${this.baseUrl}/categorias`);
  }

  createCategory(user: Category) {
    return this.http.post<any>(`${this.baseUrl}/categorias`, user);
  }

  updateCategory(user: Category) {
    /* const token
    const headers: HttpHeaders = [{'x-token' : }] */
    const url = `${this.baseUrl}/categorias/${user._id}`;
    return this.http.put(url, user);
  }

  deleteCategory(category: Category) {
    const url = `${this.baseUrl}/categorias/${category._id}`;
    return this.http.delete(url);
  }

  ////// PRODUCTS SERVICES //////

  getProducts() {
    return this.http.get<ProductResponse>(`${this.baseUrl}/productos`);
  }

  createProduct(user: Producto) {
    return this.http.post<any>(`${this.baseUrl}/productos`, user);
  }

  updateProduct(user: Producto) {
    /* const token
    const headers: HttpHeaders = [{'x-token' : }] */
    const url = `${this.baseUrl}/productos/${user._id}`;
    return this.http.put(url, user);
  }

  deleteProduct(product: Producto) {
    const url = `${this.baseUrl}/productos/${product._id}`;
    return this.http.delete(url);
  }


}
