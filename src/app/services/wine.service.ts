import { HttpClient } from '@angular/common/http';
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


  getAllWines(): Observable<WineSearchResults> {
    return this.http.get<WineSearchResults>(this.url);
  }

  getOneWine(wineId: number): Observable<Wine> {
    return this.http.get<Wine>(`${this.url}/${wineId}`);
  }

  addWine(newWine: Wine){
    return this.http.post(`${this.url}`, newWine);
  }

  deleteWine(existingId: number) {
    return this.http.delete(`${this.url}/${existingId}`);
  }

  updateWine(existingWine: Wine) {
    this.http.put(`${this.url}`,existingWine);
  }
  
}
