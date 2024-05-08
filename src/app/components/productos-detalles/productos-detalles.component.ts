import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-detalles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos-detalles.component.html',
  styleUrl: './productos-detalles.component.css',
})
export class ProductosDetallesComponent {
  ruta = inject(ActivatedRoute);
  servicios = inject(ProductosService);
  productos: any;
  detalles: any;
  id: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ruta.params.subscribe((params) => {
      console.log(params);
      this.id = params['idProductos'];
      console.log(this.id);
      this.servicios.getProductos().subscribe((data) => {
        this.productos = data;
        this.detalles = this.productos.find((item: any) => item.id == this.id);
        console.log(this.detalles);
      });
    });
  }
}
