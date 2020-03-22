import { Injectable } from '@angular/core';
import { data} from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {
  api = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/products';
    products = data;
    constructor( private http: HttpClient){}
    getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
     getProduct(id){
    return this.products.find(product => product.id == id);
  }
    removeProduct(id){
        return this.products.filter(product => product.id !=id);
    }
     addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
}