import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWineComponent } from './single-wine.component';

describe('SingleWineComponent', () => {
  let component: SingleWineComponent;
  let fixture: ComponentFixture<SingleWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
