import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  rol=localStorage.getItem('rol')
  constructor(private router: Router) {}
  token=localStorage.getItem('token')
  cerrarSesion(){
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    this.router.navigate(['/home']);
  }
}
