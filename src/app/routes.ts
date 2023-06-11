import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((c) => c.AboutComponent),
    title: 'About',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent),
    title: 'Contact',
  },
  {
    path: 'minimalist',
    loadComponent: () => import('./pages/minimalist/minimalist.component').then((c) => c.MinimalistComponent),
    title: 'Minimalist',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((c) => c.ServicesComponent),
    title: 'Services',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then((c) => c.TeamComponent),
    title: 'Team',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
