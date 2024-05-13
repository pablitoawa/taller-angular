import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Options, LabelType, NgxSliderModule } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NgxSliderModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  servicios = inject(ProductosService);
  productos: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicios.getProductos().subscribe((data) => { this.productos = data })
  }

  minValue: number = 0;
  maxValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  category: string = "";
  
}