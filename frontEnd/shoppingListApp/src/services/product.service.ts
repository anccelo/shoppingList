import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Product } from '../app/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://lfr024384.corp.capgemini.com:7701/product';

  info={
    city:'Paris',
    date: new Date()
  }

  //javaProducts:any;

  getAllProducts(){
    return this._http.get<Product[]>(this.productUrl);
  }

  addProduct(product: Product) {
  //return "ciao";
  console.log(product);
  this._http.post<Product>(this.productUrl,product)
    .toPromise()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log("err",err)
    });
  }

  getInfo(){
    return this.info;
  }

  constructor(private _http:HttpClient) { }
}
