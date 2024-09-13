import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    {
        path: 'about',
        title: 'About - Gabriel de Souza',
        loadComponent: () =>
            import('./pages/developer/developer.component').then(
                (c) => c.DeveloperComponent
            ),
    },
    {
        path: 'projects',
        title: 'Projects',
        loadChildren: () =>
            import('./pages/projects').then((r) => r.PROJECTS_ROUTES),
    },
    {
        path: 'services',
        title: 'My Services',
        loadChildren: () =>
            import('./pages/my-services').then((r) => r.SERVICE_ROUTES),
    },
    {
        path: '404',
        title: 'Page Not Found',
        loadComponent: () =>
            import('./pages/not-found').then((c) => c.NotFound),
    },
    { path: '**', redirectTo: '/404' },
];
