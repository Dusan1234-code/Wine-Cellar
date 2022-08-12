import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from 'src/models/wine.model';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-single-wine',
  templateUrl: './single-wine.component.html',
  styleUrls: ['./single-wine.component.css']
})
export class SingleWineComponent implements OnInit {

  wineId: number= NaN;
  wine: Wine = new Wine();

  constructor(private service: WineService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.wineId = params['id'];
      this.getWineById();
    })
  }

  getWineById() {
    this.service.getOneWine(this.wineId).subscribe((response: any)=>{
      this.wine = response;
    })
  }

}
