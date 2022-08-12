import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { Wine } from 'src/models/wine.model';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {

  formGroup: FormGroup;
  wine: Wine = new Wine();
  wineId: number = NaN;
  enabled: boolean = false;

  constructor(private builder: FormBuilder, private service: WineService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = this.builder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      year:['', Validators.required],
      grapes:['', Validators.required],
      country:[''],
      region:['']
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.wineId = params['id'];
      this.service.getOneWine(this.wineId).subscribe((response)=>{
        this.wine = response;
        if(params['id'] >= 1) {
          this.enabled = false;
        } else {
          this.enabled = true;
        }
      })
    })
  }

  onSubmit() {
    this.wine = this.formGroup.value
    this.service.addWine(this.wine).subscribe((data)=>{
      this.router.navigate(['/wines'])
    });
    this.formGroup.reset();
  }

}
