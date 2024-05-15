import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [GaleriaComponent, CartComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
