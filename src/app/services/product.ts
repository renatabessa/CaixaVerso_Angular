import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', //serve toda a aplicacao
})
export class ProductService {

    constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductById(id: string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
