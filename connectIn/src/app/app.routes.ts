import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent() {
        return import('./components/login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'search',
    pathMatch: 'full',
    loadComponent() {
        return import('./components/search/search.component').then((m) => m.SearchComponent);
    },
  },
  {
    path: 'dependencyInject',
    pathMatch: 'full',
    loadComponent() {
        return import('./components/list/list.component').then((m) => m.ListComponent);
    },
  },
];
