import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  info={
    city:'Paris',
    date: new Date()
  }

  products =[
    {id: 123, name: 'pane'},
    {id: 234, name: 'latte'}
  ]

  newProduct = {id:null, name:''}

  addProduct(prd){
    this.products.push(prd);
    this.newProduct={id:null, name:''}
    
  }


  constructor() { }

  ngOnInit() {
  }


    

}
