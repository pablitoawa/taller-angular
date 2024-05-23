import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  reload= inject(ProductosService);
  email: any;
  password: any;
  token: any;
  rol:any;
  constructor(private router: Router, private reloadService: ProductosService) {}

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      console.log(p)
      this.rol=p.user.rol
      if (this.token != '') {
        localStorage.setItem("token", this.token)
        localStorage.setItem("rol",this.rol)
        window.location.reload()
      } else {
        localStorage.setItem("token", '')
      }
    }
    )
  }
}
