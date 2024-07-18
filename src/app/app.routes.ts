import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        title: 'Homepage - Sou Gabriel',
        loadComponent: () => import('./pages/homepage').then((m) => m.Homepage),
    },
    {
        path: 'projects',
        title: 'Projects',
        loadChildren: () =>
            import('./pages/projects/projects.routes').then((r) => r.routes),
    },
    {
        path: '404',
        title: 'Page Not Found',
        loadComponent: () =>
            import('./pages/not-found').then((m) => m.NotFound),
    },
    { path: '**', redirectTo: '/404' },
];
