import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductListing } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  public getProducts() {
    return this._httpClient.get<ProductListing>("/products");
  }

  public getProductById(id: number) {
    return this._httpClient.get<Product>(`/products/${id}`);
  }
}
