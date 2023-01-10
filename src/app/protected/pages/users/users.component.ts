import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  /* displayedColumns: string[] = ['Nombre', 'Correo', 'Rol', 'Estado']; */
  users: Usuario[] = [];

  updateList(e: boolean) {
    console.log(e);
    e ? this.getAllUsers() : null;
  }

  getAllUsers(): void {
    this.globalService.getUsers().subscribe((resp) => {
      console.log(resp);
      if (resp.total) {
        this.users = resp.usuarios;
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
    this.users.unshift({
      new: true,
      nombre: '',
      correo: '',
      estado: true,
      rol: 'ADMIN_ROLE',
    });
  }

  onRemove(e: boolean) {
    e ? this.users.shift() : null;
  }
  /* toogleUser */
}
