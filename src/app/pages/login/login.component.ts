import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  email: any;
  password: any;
  token: any;
  rol:any;
  constructor(private router: Router) {}

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      console.log(p)
      this.rol=p.user.rol
      if (this.token != '') {
        localStorage.setItem("token", this.token)
        localStorage.setItem("rol",this.rol)
        this.router.navigate(['/home']);
      } else {
        localStorage.setItem("token", '')
      }
    }
    )
  }
}
