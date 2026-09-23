import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { FutListComponent } from './features/cases/pages/case-list/case-list.component';
import { FutCreateComponent } from './features/cases/pages/case-create/case-create.component';
import { FutDetailComponent } from './features/cases/pages/case-detail/case-detail.component';
import { TrackingComponent } from './features/tracking/pages/tracking/tracking.component';
import { ReportsComponent } from './features/reports/pages/reports/reports.component';
import { UserListComponent } from './features/users/pages/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cases', component: FutListComponent },
  { path: 'cases/nuevo', component: FutCreateComponent },
  { path: 'cases/:id', component: FutDetailComponent },
  { path: 'seguimiento', component: TrackingComponent },
  { path: 'reportes', component: ReportsComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: '**', redirectTo: 'login' }
];
