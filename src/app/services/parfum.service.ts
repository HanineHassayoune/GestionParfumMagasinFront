import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {

  constructor(private httpClient: HttpClient) { }
  getListParfums(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/parfums`)
  }

  postParfum(data:any):Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/parfums`,data);
  }

  deleteParfum(parfumId: string):Observable<any> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/${environment.prefix}/parfums/${parfumId}`);
    }


    getParfum(parfumId: string): Observable<any> {
      return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/parfums/${parfumId}`);
    }
  
    updateParfum(parfumId: string, data: any): Observable<any> {
      return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/parfums/${parfumId}`, data);
    }


    
}
