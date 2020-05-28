import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {InfoComponent} from './info/info.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'info', component: InfoComponent},
  {path: '', redirectTo: '/info', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
