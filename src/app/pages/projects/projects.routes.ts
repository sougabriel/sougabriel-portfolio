import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./projects.component').then((c) => c.Projects),
        children: [
            {
                path: 'list',
                title: 'Projects List - Sou Gabriel',
                loadComponent: () =>
                    import('./projects-list/projects-list').then(
                        (c) => c.ProjectsList
                    ),
            },
            {
                path: '',
                redirectTo: '/projects/list',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full',
    },
];
