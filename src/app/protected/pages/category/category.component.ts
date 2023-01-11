import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from '../../interfaces';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  categories: Category[] = [];

  updateList(e: boolean) {
    console.log(e);
    e ? this.getAllCategories() : null;
  }

  getAllCategories(): void {
    this.globalService.getCategories().subscribe((resp: any) => {
      if (resp.total) {
        this.categories = resp.categorias;
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
    this.categories.unshift({
      new: true,
      nombre: ''
    });
  }

  onRemove(e: boolean) {
    e ? this.categories.shift() : null;
  }

}
