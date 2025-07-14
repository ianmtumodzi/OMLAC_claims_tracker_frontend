import { Routes } from '@angular/router';
import { LoginComponent } from './pages/landing/login/login.component';
import { AdminLayoutComponent } from './pages/authenticated/admin-layout/admin-layout.component';
import { AdminhomeComponent } from './pages/authenticated/admin-layout/adminhome/adminhome.component';
import { ClaimsComponent } from './pages/authenticated/admin-layout/claims/claims.component';
import { ReportsComponent } from './pages/authenticated/admin-layout/reports/reports.component';
import { UsermanagementComponent } from './pages/authenticated/admin-layout/usermanagement/usermanagement.component';

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
    ],
  },
];

