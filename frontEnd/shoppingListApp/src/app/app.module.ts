import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes =[ 
  { path: 'products', component: ProductsComponent},
  { path: '',
    redirectTo: '',
    pathMatch:'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
