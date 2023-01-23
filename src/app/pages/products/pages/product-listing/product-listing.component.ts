import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListingComponent implements OnInit {
  public products: Product[] = [];
 
  constructor(private _productService: ProductService, private cdr: ChangeDetectorRef, private _router: Router) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products = data.products;
      this.cdr.markForCheck();
    });
  }

  public onProductClick(product: Product) {
    // this._router.navigateByUrl(`/product/${product.id}`);
    this._router.navigate(["product", product.id]);
  }
}
