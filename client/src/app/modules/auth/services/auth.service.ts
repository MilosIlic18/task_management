import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _http:HttpClient) { }

  signIn = (data:any):Observable<any>=>this._http.post<any>(`${environment.API.BASE_URL+environment.API.AUTH.BASE_URL}`,data)
  signUp = (data:any):Observable<any>=>this._http.post<any>(`${environment.API.BASE_URL+environment.API.AUTH.BASE_URL+environment.API.AUTH.SIGNUP}`,data)

}
