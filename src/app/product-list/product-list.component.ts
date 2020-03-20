import { Component, OnInit } from '@angular/core';
import { data} from '../MockData';
import { Product } from '../product' ;
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
private ProductService : ProductService
  ){
    console.log('constructor')
  }
  ngOnInit(): void {
  }
products = data;
selected : Product[];
showDetail(Product){
  this.selected = Product;
  console.log(this.selected);
}
getProducts(){
  this.products = this.ProductService.getProducts();
}
removeItem(id){
  this.products = this.ProductService.removeProduct(id);
  // this.products = this.products.filter(product => product.id != id);
}
}
