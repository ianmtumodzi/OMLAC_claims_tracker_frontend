import { Routes } from '@angular/router';
import { LoginComponent } from './pages/landing/login/login.component';
import { AdminLayoutComponent } from './pages/authenticated/admin-layout/admin-layout.component';
import { AdminhomeComponent } from './pages/authenticated/admin-layout/adminhome/adminhome.component';
import { ClaimsComponent } from './pages/authenticated/admin-layout/claims/claims.component';
import { ReportsComponent } from './pages/authenticated/admin-layout/reports/reports.component';
import { UsermanagementComponent } from './pages/authenticated/admin-layout/usermanagement/usermanagement.component';
import { ClaimTypeComponent } from './pages/authenticated/admin-layout/claim-type/claim-type.component';
import { ProductTypeComponent} from './pages/authenticated/admin-layout/product-type/product-type.component';
import { BusinessTypeComponent } from './pages/authenticated/admin-layout/business-type/business-type.component';
import { ApprovalsComponent } from './pages/authenticated/admin-layout/approvals/approvals.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin-layout',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminhomeComponent },
      { path: 'claims', component: ClaimsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'usermanagement', component: UsermanagementComponent },
      { path: 'claim-type', component: ClaimTypeComponent},
      { path: 'product-type', component: ProductTypeComponent},
      { path: 'business-unit', component: BusinessTypeComponent},
      { path: 'approvals', component: ApprovalsComponent}

  
    ],
  },
];

