import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from 'src/models/wine.model';
import { WineSearchResults } from '../models/wine.model';


@Injectable({
  providedIn: 'root'
})
export class WineService {
  url = 'http://localhost:3000/api/wines';

  constructor(private http: HttpClient) { }


  getAllWines(params?:any): Observable<WineSearchResults> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page ||'')
        .set("pageSize", params.pageSize || "")
      }
    }

    return this.http.get<WineSearchResults>(this.url, queryParams);
  }

  getOneWine(wineId: number): Observable<Wine> {
    return this.http.get<Wine>(`${this.url}/${wineId}`);
  }

  addWine(newWine: Wine){
    return this.http.post(`${this.url}`, newWine);
  }

  deleteWine(existingId: number): Observable<any> {
    return this.http.delete(`${this.url}/${existingId}`);
  }

  updateWine(updatedWine: Wine): Observable<any>{
    return this.http.put(`${this.url}/${updatedWine._id}`, updatedWine);
  }
  
}
