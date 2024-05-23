import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-gestion-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent {

  service = inject(ProductosService);
  productos: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getProductos().subscribe((data) => { this.productos = data })
  }

  delete (id: any) {
    this.service.deleteProduct(id).subscribe();
    window.location.reload();
  }

  edit (id: any) {
    this.service.putProduct(id).subscribe();
    window.location.reload();
  }
}
