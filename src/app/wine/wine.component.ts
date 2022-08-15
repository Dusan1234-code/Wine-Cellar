import { Component, Injectable, OnInit } from '@angular/core';
import { Wine } from 'src/models/wine.model';
import { WineSearchResults } from '../models/wine.model';
import { WineService } from '../services/wine.service';

@Injectable()

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  wines: Wine[]= [];

  params = {
    page: 1,
    pageSize: 8,
  }

  disabl: boolean = false;
  count: number = NaN;
  numberOfPages = 0;

  constructor(private service: WineService) { 
  }

  ngOnInit(): void {
    this.getAllWines();
  }

  getAllWines() {
    this.service.getAllWines(this.params).subscribe((response: WineSearchResults)=>{
      this.wines = response.results;
      this.count = response.count;
      this.numberOfPages = Math.ceil(this.count / this.params.pageSize);
    })
  }


  onPrevPage(value: number) {
    this.params.page -= value;
    this.getAllWines();
  }

  onNextPage(value: number) {
    this.params.page += value;
    this.getAllWines();
  }

  
}
