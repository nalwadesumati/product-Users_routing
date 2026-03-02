import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  productsArr: Iproduct[] = [];
  selectedProductId!: string;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private ActiveRoutes: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    this._productService.setFirstProductSub$.subscribe({
      next: (flag) => {
        setTimeout(() => {
          if (flag) {
            this.selectedProductId = this.productsArr[0].pid;
            this.setFirstProductAsSelected();
          }
        }, 0);
      },
    });
  }

  loadProducts() {
    this._productService.fetchProduct().subscribe({
      next: (data) => {
        console.log(data);
        this.productsArr = data;
        this.selectedProductId = data[0].pid;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setFirstProductAsSelected() {
    this._router.navigate([this.productsArr[0].pid], {
      relativeTo: this.ActiveRoutes,
      queryParams: {
        cr: this.productsArr[0].canReturn,
      },
    });
  }

  navigateToProduct(product: Iproduct) {
    this._router.navigate([product.pid], {
      relativeTo: this.ActiveRoutes,
      queryParams: {
        cr: product.canReturn,
      },
    });
    this.selectedProductId = product.pid;
  }
}
