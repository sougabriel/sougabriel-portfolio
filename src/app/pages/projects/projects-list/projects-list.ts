import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../api';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ProjectCardComponent,
        RouterLink,
        AsyncPipe,
    ],
    templateUrl: './projects-list.html',
    styleUrl: './projects-list.scss',
})
export class ProjectsList {
    protected readonly projectService = inject(ProjectService);
    protected readonly projects$ = this.projectService.getProjects();

}
