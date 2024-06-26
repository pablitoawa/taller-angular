import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  servicios = inject(CarritoService);
  carrito: any;
  productos: any;
  rol=localStorage.getItem('rol')
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicios.getCarrito().subscribe((data) => {
      this.carrito = data;
      this.productos = this.carrito.length;
    });
  }

  delete(id: any) {
    this.servicios.deleteCarrito(id).subscribe()
    window.location.reload()
  }
}
