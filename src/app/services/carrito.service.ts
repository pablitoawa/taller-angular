import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private http: HttpClient) {}

  private API_CARRITO = 'http://localhost:3001/carrito';

  /// Leer - GET ///
  getCarrito(): Observable<any> {
    return this.http.get(this.API_CARRITO);
  }

  /// Crear - POST ///
  postCarrito(carrito: any): void {
    this.getCarrito().subscribe((carritos) => {
      if (carritos.length === 0) {
        carrito.quantity = 1;
        this.http.post(this.API_CARRITO, carrito).subscribe();
      } else {
        const aumento = carritos.find((item: any) => item.id === carrito.id);
        if (aumento) {
          aumento.quantity = aumento.quantity + 1;
          this.http.put(`${this.API_CARRITO}/${aumento.id}`, aumento).subscribe();
        } else {
          carrito.quantity = 1;
          this.http.post(this.API_CARRITO, carrito).subscribe();
        }
      }
    });
  }

  /// Eliminar - DELETE ///
  deleteCarrito(id: any): Observable<any> {
    return this.http.delete(`${this.API_CARRITO}/${id}`);
  }
}
