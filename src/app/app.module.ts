import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { FormsModule } from '@angular/forms';
import { ProductService} from './product.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CategoryComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
