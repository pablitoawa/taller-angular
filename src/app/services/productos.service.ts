import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  private API_PRODUCTOS = 'http://localhost:3001/productos'; 

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  getCategory(category : string): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }
}
