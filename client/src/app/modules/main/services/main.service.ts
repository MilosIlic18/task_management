import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly _http:HttpClient) { }
  getAllByUser = (id:number):Observable<any>=>this._http.get<any>(`${environment.API.BASE_URL+environment.API.USER+id}`,{headers:{'user':sessionStorage.getItem('user')?.toString() || ''}})
  edit         = (itemId:number,taskId:number):Observable<any>=>this._http.put<any>(`${environment.API.BASE_URL+environment.API.ITEM+itemId+environment.API.SEP+environment.API.TASK+environment.API.SEP+taskId}`,{},{headers:{'user':sessionStorage.getItem('user')?.toString() || ''}})
  saveItem     = (data:any):Observable<any>=>this._http.post<any>(`${environment.API.BASE_URL+environment.API.ITEM}`,data,{headers:{'user':sessionStorage.getItem('user')?.toString() || ''}})
  removeItem   = (id:any):Observable<any>=>this._http.delete<any>(`${environment.API.BASE_URL+environment.API.ITEM+id}`,{headers:{'user':sessionStorage.getItem('user')?.toString() || ''}})
  saveTask     = (data:any):Observable<any>=>this._http.post<any>(`${environment.API.BASE_URL+environment.API.ITEM+environment.API.TASK}`,data,{headers:{'user':sessionStorage.getItem('user')?.toString() || ''}})

}
