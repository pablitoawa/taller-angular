import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-detalles',
  standalone: true,
  imports: [],
  templateUrl: './productos-detalles.component.html',
  styleUrl: './productos-detalles.component.css'
})
export class ProductosDetallesComponent {

  ruta = inject(ActivatedRoute);

  servicios = inject(ProductosService);
  productos: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicios.getProductos().subscribe((data) => { this.productos = data });

    
  }

  
}
