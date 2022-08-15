import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineComponent } from './wine/wine.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddWineComponent } from './add-wine/add-wine.component';
import { SingleWineComponent } from './single-wine/single-wine.component';
import { EditWineComponent } from './edit-wine/edit-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineComponent,
    SearchFormComponent,
    TableComponent,
    PaginationComponent,
    AddWineComponent,
    SingleWineComponent,
    EditWineComponent, 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
