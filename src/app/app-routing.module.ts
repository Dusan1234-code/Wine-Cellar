import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWineComponent } from './add-wine/add-wine.component';
import { EditWineComponent } from './edit-wine/edit-wine.component';
import { SingleWineComponent } from './single-wine/single-wine.component';
import { WineComponent } from './wine/wine.component';

const routes: Routes = [
  {path:'wines',component:WineComponent},
  {path:'wines/add',component: AddWineComponent},
  {path:'wines/add/:id',component: AddWineComponent},
  {path:'wines/edit/:id',component: EditWineComponent},
  {path:"wines/:id", component:SingleWineComponent},
  {path:"", redirectTo:'wines', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
