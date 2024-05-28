import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private httpClient: HttpClient) { }
  getAllMagasins(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/magasins`)
  }

  getMagasin(magasinId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/magasins/${magasinId}`);
  }

 
}
