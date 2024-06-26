import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private API_USERS= 'http://localhost:3000/login';
  private API_REGISTER= 'http://localhost:3000/register'
  private API_EDIT= 'http://localhost:3000/users'

  postUsers(usuario:any): Observable<any>{
    return this.http.post(this.API_USERS, usuario)
  }
  getUsers():Observable<any>{
    return this.http.get(this.API_USERS)
  }

  postRegister(usuario:any):Observable<any>{
    return this.http.post(this.API_REGISTER,usuario)
  }

  putUsers(usuario:any):Observable<any>{
    return this.http.put(`${this.API_EDIT}/${usuario.id}`, usuario)
  }
}
