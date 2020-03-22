import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddComponent } from './product-add/product-add.component';
const routes: Routes = [
  {path: 'home', component:CategoryComponent},
  { path: 'about', component: ProductAddComponent},
  { path: 'products', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
