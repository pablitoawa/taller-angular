import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  private API_PRODUCTOS = 'http://localhost:3002/productos'; 

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  getCategory(category : string): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  postProduct(producto: any): void {
    this.http.post(this.API_PRODUCTOS, producto).subscribe();
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`);
  }

  putProduct(producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/${producto.id}`, producto);
  }

  saveProduct(producto: any): Observable<any> {
    return this.http.post(this.API_PRODUCTOS, producto);
  }
}
