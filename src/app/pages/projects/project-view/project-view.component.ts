import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Project, ProjectService } from '@api/index';
import { Router } from '@angular/router';
import { ProjectInfoComponent } from './project-info';

@Component({
    selector: 'project-view',
    standalone: true,
    imports: [
        MarkdownModule,
        ProjectInfoComponent
    ],
    templateUrl: './project-view.component.html',
    styleUrl: './project-view.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectViewComponent {
    protected initialProject: Project = {
        name: '',
        short_name: '',
        keywords: [],
        summary: '',
        documentUrl: '',
        imageUrl: ''
    }

    protected readonly projectsService = inject(ProjectService);
    protected readonly router = inject(Router);
    protected selectedProject = signal<Project>(this.initialProject);

    constructor() {
        const route = this.router.url.split('/').pop();
        this.projectsService.getProjects().subscribe((projects) => {
            projects.find((project) => {
                if (project.short_name == route) {
                    this.selectedProject.set(project);
                }
            });
        });
    }

}
