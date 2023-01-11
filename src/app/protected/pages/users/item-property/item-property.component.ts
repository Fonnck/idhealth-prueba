import 'animate.css';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/auth/interfaces';
import { emailPattern } from '../../../../utils/index';
import { GlobalService } from '../../../services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-property',
  templateUrl: './item-property.component.html',
  styleUrls: ['./item-property.component.css'],
})
export class ItemPropertyComponent implements OnInit {
  /* ublic !userForm: FormGroup; */
  @Input() user: any = {};

  @Output() updateList = new EventEmitter<boolean>();
  @Output() deleteElement = new EventEmitter<boolean>();

  userForm: FormGroup = this.fb.group({
    uid: [''],
    nombre: ['', [Validators.required, Validators.minLength(6)]],
    correo: ['', [Validators.required]],
    password: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    rol: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private globalService: GlobalService) {}

  canEdit: boolean = true;
  isActive: boolean = false;

  ngOnInit(): void {
    console.log(this.user);
    this.canEdit = !this.user.new;
    this.isActive = this.user.estado;
    this.userForm.patchValue({
      uid: this.user.uid,
      nombre: this.user.nombre,
      correo: this.user.correo,
      estado: this.user.estado,
      rol: this.user.rol,
    });
  }

  toogleForm() {
    this.canEdit = !this.canEdit;
  }

  tootgleSlide() {
    this.isActive = !this.isActive;
  }

  updateUser(user: Usuario) {
    console.log('UPDATING');
    this.globalService.updateUser(user).subscribe((resp: any) => {
      console.log('USUARIO', resp.uid);
      console.log(typeof resp);
      if (resp.uid != null) {
        this.updateList.emit(true);
        Swal.fire('Usuario actualizado con éxito!', '', 'success');
      } else {
        this.updateList.emit(false);
        Swal.fire('Opss!', 'Ha ocurrido un error', 'error');
      }
    });
  }

  createUser(user: Usuario) {
    console.log('CREATING');
    user.uid = null;
    this.globalService.createUser(user)
    .subscribe((resp: any) => {
      console.log('USUARIO', resp.uid);
      console.log(typeof resp);
      if (resp.usuario.uid != null) {
        this.updateList.emit(true);
        Swal.fire('Usuario creado con éxito!', '', 'success');
      } else {
        this.updateList.emit(false);
        Swal.fire('Opss!', 'Ha ocurrido un error', 'error');
      }
    })
    ;
  }

  onDelete() {
    this.user.new ? this.deleteElement.emit(true) : this.showDelete();
  }

  showDelete = () => {
    Swal.fire({
      title: 'Está seguro de eliminar el usuario?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser();
      }
    });
  };

  deleteUser() {
    this.globalService.deleteCategory(this.user).subscribe((resp: any) => {
      console.log(resp);
      this.updateList.emit(true);
      Swal.fire('Usuario eliminado con éxito!', '', 'success');
    });
  }

  submit() {
    this.toogleForm();
    console.log('Envio de formulario');
    if (this.canEdit) {
      console.log(this.userForm.value);
      this.user.uid
        ? this.updateUser(this.userForm.value)
        : this.createUser(this.userForm.value);
    }
  }
}
