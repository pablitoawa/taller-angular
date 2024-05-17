import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) {}

  private API_CARRITO = 'http://localhost:3000/carrito';

  /// Leer - GET ///
  getCarrito(): Observable<any> {
    return this.http.get(this.API_CARRITO);
  }

  /// Eliminar - DELETE ///
  deleteCarrito(id: any): Observable<any> {
    return this.http.delete(`${this.API_CARRITO}/${id}`);
  }
}
