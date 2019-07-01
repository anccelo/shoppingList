import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  info={
    city:'Paris',
    date: new Date()
  }

  products =[
    {id: 123, name: 'pane'},
    {id: 234, name: 'latte'}
  ]

  addProduct(prd){
    this.products.push(prd);
  }

  getAllProducts(){
    return this.products;
  }

  getInfo(){
    return this.info;
  }

  constructor() { }
}
