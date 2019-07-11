import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
/*
  constructor(private productService: ProductService) {
    this.info = this.productService.getInfo();
    this.products = this.productService.getAllProducts();
  }

  info: any;
  products  = [];



 newProduct = { id: null, name: '' }

  addProduct(prd) {
    console.log(prd);
    this.productService.addProduct(prd);
    this.newProduct.name = '';
    this.newProduct.id = '';
  }
  */

 addProduct(prd) {
  this.productService.addProduct(prd);
  console.log(prd);
  
}

  products$:Product[]
  constructor (private productService: ProductService){}

  info: any;

  ngOnInit() {
    this.info = this.productService.getInfo();
    return this.productService.getAllProducts().subscribe(data => this.products$ = data);
  }
}
