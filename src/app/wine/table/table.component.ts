import { Component, Input, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/models/wine.model';
import { WineComponent } from '../wine.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  allWine: Wine[] = [];

  constructor(private service: WineService, private wine: WineComponent) { }

  ngOnInit(): void {
  }

  deleteWine(existingId: number) {
    this.service.deleteWine(existingId).subscribe((data)=>{
      this.wine.getAllWines();
    })

  }



}
