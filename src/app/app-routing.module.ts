import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>  import(/* webpackChunkName: "dashboard" */ "./pages/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "product",
    loadChildren: () => import(/* webpackChunkName: "product" */ "./pages/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "auth",
    loadChildren: () => import(/*webpackChunkName: "auth" */ "./pages/auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
