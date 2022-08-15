import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output()
  emmiter = new EventEmitter<number>();

  @Output()
  emmiterNext = new EventEmitter<number>();
  page:number = 1;

  @Input()
  pagination: number = 0;

  fields = new Array(this.pagination);


  constructor() { }

  ngOnInit(): void {
    console.log(this.fields);
  }

  prevPage() {
    this.emmiter.emit(this.page);
  }

  nextPage() {
    this.emmiterNext.emit(this.page);
  }

}
