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

  constructor(private builder: FormBuilder, private service: WineService, private router: Router) {
    this.formGroup = this.builder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      year:['', Validators.required],
      grapes:['', Validators.required],
      country:[''],
      region:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.wine = this.formGroup.value
    this.service.addWine(this.wine).subscribe((data)=>{
      this.router.navigate(['/wines'])
    });
    this.formGroup.reset();
  }


}
