import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  service= inject(LoginService);
  name:any;
  rol:any;
  email:any;
  password:any;
  id:any;
  selectedUserId: number | null = null;
  address:any;
  users:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getUsers().subscribe((data) => {this.users = data;});
  }

  edit (formulario: any) {
    this.service.putUsers(formulario.value).subscribe();
    window.location.reload();
  }

  selectUserToEdit(id: number) {
    this.selectedUserId = id;
  }
}
