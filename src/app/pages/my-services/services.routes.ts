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
                    import('./service-list/service-list.component').then(
                        (c) => c.ServiceListComponent
                    ),
            },
            {
                path: 'details/:service',
                title: 'Service Details',
                loadComponent: () =>
                    import('./service-view/service-view.component').then(
                        (c) => c.ServiceViewComponent
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
