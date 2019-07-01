import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  info:any;
  products=[];

  newProduct = {id:null, name:''}

  constructor(private productService:ProductService) {
    this.info = this.productService.getInfo();
    this.products= this.productService.getAllProducts();
   }

   addProduct(prd){
    this.productService.addProduct(prd);
    this.newProduct.name='';
    this.newProduct.id='';
  }

  ngOnInit() {
  }


    

}
