import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './main/items/items.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:categoryId', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
