import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/protected/services/global.service';
import Swal from 'sweetalert2';
import { Category } from '../../../interfaces/index';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit {
  @Input() category: any = {};

  @Output() updateList = new EventEmitter<boolean>();
  @Output() deleteElement = new EventEmitter<boolean>();

  categoryForm: FormGroup = this.fb.group({
    _id: [''],
    nombre: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private globalService: GlobalService) {}

  canEdit: boolean = true;

  ngOnInit(): void {
    this.categoryForm.patchValue({
      _id: this.category._id,
      nombre: this.category.nombre,
    });
  }

  toogleForm() {
    this.canEdit = !this.canEdit;
  }

  updateCategory(user: Category) {
    console.log('UPDATING');
    this.globalService.updateCategory(user).subscribe((resp: any) => {
      console.log('USUARIO', resp._id);
      console.log(typeof resp);
      if (resp._id != null) {
        this.updateList.emit(true);
      } else {
        this.updateList.emit(false);
        Swal.fire({});
      }
    });
  }

  createCategory(user: Category) {
    console.log('CREATING');
    user._id = null;
    this.globalService.createCategory(user)
    .subscribe((resp: any) => {
      console.log('USUARIO', resp._id);
      console.log(typeof resp);
      if (resp._id != null) {
        this.updateList.emit(true);
      } else {
        this.updateList.emit(false);
        Swal.fire({});
      }
    })
    ;
  }

  onDelete() {
    this.category.new ? this.deleteElement.emit(true) : this.showDelete();
  }

  showDelete = () => {
    Swal.fire({
      title: 'Está seguro de eliminar la categoria?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCategory();
      }
    });
  };

  deleteCategory() {
    this.globalService.deleteCategory(this.category)
    .subscribe((resp: any) => {
      console.log(resp);
      if(!(resp.msg === 'Token no válido')){
        Swal.fire('Categoria eliminado con éxito!', '', 'success');
        this.updateList.emit(true);
      } else {
        Swal.fire('Ha ocurrido un error', 'Opss!', 'error');
    }
    });
  }

  submit() {
    this.toogleForm();
    console.log('Envio de formulario');
    if (this.canEdit) {
      console.log(this.categoryForm.value);
      this.category._id
        ? this.updateCategory(this.categoryForm.value)
        : this.createCategory(this.categoryForm.value);
    }
  }

}
