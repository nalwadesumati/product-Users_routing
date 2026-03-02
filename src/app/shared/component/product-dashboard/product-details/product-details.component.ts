import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { filter, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productObj!: Iproduct;
  productId!: string;
  constructor(
    private _router: Router,
    private activateRoutes: ActivatedRoute,
    private _snackBar: SnackbarService,
    private _matDialog: MatDialog,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProductByRoute();
  }
  getProductByRoute(): void {
    this.activateRoutes.params
      .pipe(
        switchMap((params: Params) => {
          this.productId = params['pid'];
          return this.productService.fetchProductById(this.productId);
        }),
      )
      .subscribe({
        next: (data: Iproduct) => {
          this.productObj = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onProductEdit() {
    this._router.navigate(['edit'], {
      relativeTo: this.activateRoutes,
      queryParamsHandling: 'preserve',
    });
  }

  onProductRemove() {
    let matConfig = new MatDialogConfig();
    matConfig.data = `Are you sure you want to remove product with id ${this.productId}`;

    matConfig.disableClose = true;
    this._matDialog
      .open(GetConfirmComponent, matConfig)
      .afterClosed()
      .pipe(
        filter((res) => res),
        switchMap(() => this.productService.removeProduct(this.productId)),
      )
      .subscribe({
        next: (data) => {
          this._snackBar.success(
            `The product with id ${this.productId} removed Successfully!!`,
          );
          this.productService.setFirstProductSub$.next(true);
          this._router.navigate(['products']);
        },
        error: (err) => {
          this._snackBar.error(`Failed to remove product`);
        },
      });
  }
}
