import { Routes } from '@angular/router';
import { PrimeNgDemoComponent } from './app-prime-ng-demo/app-prime-ng-demo.component';

export const routes: Routes = [
  { path: 'prime-ng-demo', component: PrimeNgDemoComponent },
  { path: '', redirectTo: '/prime-ng-demo', pathMatch: 'full' },
];
