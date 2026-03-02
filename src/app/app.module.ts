import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/component/product-dashboard/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/component/product-dashboard/product-details/product-details.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { UsersDetailsComponent } from './shared/component/users-dashboard/users-details/users-details.component';
import { UsersFormComponent } from './shared/component/users-dashboard/users-form/users-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    UsersDashboardComponent,
    UsersDetailsComponent,
    UsersFormComponent,
    GetConfirmComponent,
    PageNotFoundComponent,
    HomeDashboardComponent,
    FairsDashboardComponent,
    NavbarComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatChipsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
