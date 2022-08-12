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

  constructor(private service: WineService) { 
  }

  ngOnInit(): void {
    this.getAllWines();
  }

  getAllWines() {
    this.service.getAllWines().subscribe((response: WineSearchResults)=>{
      this.wines = response.results;
    })
  }

  
}
