import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { ProductService } from './product.service';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListingComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
