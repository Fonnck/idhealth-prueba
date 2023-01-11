import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import Swal from 'sweetalert2';
import { Producto } from '../../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  products: Producto[] = [];

  updateList(e: boolean) {
    console.log(e);
    e ? this.getAllProducts() : null;
  }

  getAllProducts(): void {
    this.globalService.getProducts()
    .subscribe((resp: any) => {
      if (resp.total) {
        this.products = resp.productos;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Algo ha salido mal`,
        });
      }
    });
  }

  onAdd() {
    this.products.unshift({
      new: true,
      nombre: '',
      categoria: '',
      precio: 0,
      usuario: ''
    });
  }

  onRemove(e: boolean) {
    e ? this.products.shift() : null;
  }

}
