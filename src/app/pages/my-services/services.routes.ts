import { Routes } from '@angular/router';

export const SERVICE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./my-services.component').then((c) => c.MyServicesComponent),
        children: [
            {
                path: 'list',
                title: 'Services - Gabriel de Souza',
                loadComponent: () =>
                    import('./list-service/list-service.component').then(
                        (c) => c.ListServiceComponent
                    ),
            },
            {
                path: 'details/:service',
                title: 'Service Details',
                loadComponent: () =>
                    import('./view-service/view-service.component').then(
                        (c) => c.ViewServiceComponent
                    ),
            },
            {
                path: '',
                redirectTo: '/services/list',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/services',
        pathMatch: 'full',
    },
];
