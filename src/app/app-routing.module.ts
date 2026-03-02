import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { ProductFormComponent } from './shared/component/product-dashboard/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/component/product-dashboard/product-details/product-details.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { UsersFormComponent } from './shared/component/users-dashboard/users-form/users-form.component';
import { UsersDetailsComponent } from './shared/component/users-dashboard/users-details/users-details.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';

const appRoutes: Routes = [
  { path: '', component: HomeDashboardComponent },
  {
    path: 'Home',
    component: HomeDashboardComponent,
  },
  {
    path: 'users',
    component: UsersDashboardComponent,
    children: [
      {
        path: 'adduser',
        component: UsersFormComponent,
      },
      {
        path: ':userId',
        component: UsersDetailsComponent,
      },
      {
        path: ':userId/edit',
        component: UsersFormComponent,
      },
    ],
  },

  {
    path: 'products',
    component: ProductDashboardComponent,
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent,
      },
      {
        path: ':pid',
        component: ProductDetailsComponent,
      },
      {
        path: ':pid/edit',
        component: ProductFormComponent,
      },
    ],
  },

  {
    path: 'fairs',
    component: FairsDashboardComponent,
  },

  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
