import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    {
        path: 'about',
        title: 'About - Gabriel de Souza',
        loadComponent: () => import('./pages/developer/developer.component').then((m) => m.DeveloperComponent),
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
