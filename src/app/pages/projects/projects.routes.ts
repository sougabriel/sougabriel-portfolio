import { Routes, UrlSegment } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./projects.component').then((c) => c.Projects),
        children: [
            {
                path: 'list',
                title: 'Projects List - Gabriel de Souza',
                loadComponent: () =>
                    import('./projects-list/projects-list').then(
                        (c) => c.ProjectsList
                    ),
            },
            {
                path: 'details/:project',
                title: 'Project Details - Gabriel de Souza',
                loadComponent: () =>
                    import('./project-view/project-view.component').then(
                        (c) => c.ProjectViewComponent
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
