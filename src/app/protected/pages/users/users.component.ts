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

  getAllUsers(): void {
    this.globalService.getUsers().subscribe((resp) => {
      console.log(resp);
      if (resp.total) {
        this.users = resp.usuarios
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Algo ha salido mal`,
        });
      }
    });
  }
}
