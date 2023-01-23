import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListingComponent
  },
  {
    path: ":id",
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
