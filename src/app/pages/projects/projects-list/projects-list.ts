import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../project-card';
import { projects } from '@api/projects';

@Component({
    selector: 'projects-list',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ProjectCardComponent,
        RouterLink
    ],
    templateUrl: './projects-list.html',
    styleUrl: './projects-list.scss',
})
export class ProjectsList {
    protected readonly projects = projects;

    constructor() {}
}
