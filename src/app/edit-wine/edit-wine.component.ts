import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from 'src/models/wine.model';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {
  wine:Wine = new Wine();
  id:number = NaN;
  name: string = ""

  constructor(private route: ActivatedRoute, private service: WineService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.id = params['id'];
      this.getOneWine();
      console.log(this.wine);
    })

 
  }

  getOneWine() {
    this.service.getOneWine(this.id).subscribe((response: Wine)=>{
      this.wine = response;
    });
  }

  onSubmit() {
    this.wine.name = this.name;
    this.service.updateWine(this.wine).subscribe({next:(response:any)=>{
      this.router.navigate(['/wines']);
    }})
    this.service.getAllWines();
  }
}
