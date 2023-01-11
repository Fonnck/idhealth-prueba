// Generated by https://quicktype.io

export interface UsersResponse {
  total: number;
  usuarios: Usuario[];
}

export interface Usuario {
  rol: string;
  estado: boolean;
  google?: boolean;
  nombre: string;
  correo: string;
  uid?: string | null;
  new?: boolean;
}

export interface Category {
  new?: boolean;
  _id?: number | null;
  nombre: string;
}

export interface CategoryResponse {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  new?: boolean;
  _id: string;
  nombre: string;
  usuario: User;
}

export interface User {
  _id: string;
  nombre: string;
}

export interface ProductResponse {
  total: number;
  productos: Producto[];
}

export interface Producto {
  new?: boolean;
  precio: number;
  _id?: string;
  nombre: string;
  categoria: string;
  usuario: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
}
