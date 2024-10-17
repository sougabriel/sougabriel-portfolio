import { Routes } from '@angular/router';
import { DeveloperComponent } from '@pages/developer';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    {
        path: 'about',
        title: 'About - Gabriel de Souza',
        component: DeveloperComponent,
        data: {
            animation: 'AboutPage'
        }
    },
    {
        path: 'projects',
        title: 'Projects',
        loadChildren: () =>
            import('./pages/projects').then((r) => r.PROJECTS_ROUTES),
        data: {
            animation: 'ProjectsPage'
        }
    },
    {
        path: 'services',
        title: 'My Services',
        loadChildren: () =>
            import('./pages/my-services').then((r) => r.SERVICE_ROUTES),
        data: {
            animation: 'ServicesPage'
        }
    },
    {
        path: '404',
        title: 'Page Not Found',
        loadComponent: () =>
            import('./pages/not-found').then((c) => c.NotFound),
        data: {
            animation: 'NotFoundPage'
        }
    },
    { path: '**', redirectTo: '/404' },
];
