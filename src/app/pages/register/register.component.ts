import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  servicio=inject(LoginService)
  reload= inject(ProductosService);
  name:any;
  rol:any;
  direccion:any;
  email:any;
  password:any;

  constructor(private router: Router) {}

    guardar(formulario:any){
      this.servicio.postRegister(formulario.value).subscribe();
      window.location.reload();

    }

}
