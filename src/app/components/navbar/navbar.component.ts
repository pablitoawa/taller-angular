import { Component, inject } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

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
  reload= inject(ProductosService);
  cerrarSesion(){
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    window.location.reload()
  }
}
