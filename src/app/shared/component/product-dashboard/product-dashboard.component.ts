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
  }

  loadProducts() {
    this._productService.fetchProduct().subscribe({
      next: (data) => {
        console.log(data);
        this.productsArr = data;
        this.activateFirstProduct();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  activateFirstProduct() {
    if (!this.productsArr.length) return;

    const first = this.productsArr[0];

    this.selectedProductId = first.pid;

    this._router.navigate([first.pid], {
      relativeTo: this.ActiveRoutes,
      queryParams: { cr: first.canReturn },
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
