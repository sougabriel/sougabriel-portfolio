import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Project, ProjectService } from '../../../api';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetails } from './project-details/project-details';

@Component({
    selector: 'app-projects',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgOptimizedImage,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        AsyncPipe,
    ],
    templateUrl: './projects-list.html',
    styleUrl: './projects-list.scss',
})
export class ProjectsList {
    protected readonly projectService = inject(ProjectService);
    protected readonly projects$ = this.projectService.getProjects();
    protected readonly dialog = inject(MatDialog);

    protected openDialog(
        enterAnimationDuration: string,
        exitAnimationDuration: string,
        project: Project
    ): void {
        this.dialog.open(ProjectDetails, {
            enterAnimationDuration,
            exitAnimationDuration,
            data: project,
        });
    }
}
