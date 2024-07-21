import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Project } from '../../../api';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetails } from './project-details/project-details';

@Component({
    selector: 'project-card',
    standalone: true,
    imports: [MatButtonModule, MatCardModule, MatIcon, NgOptimizedImage],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
    project = input.required<Project>();

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
