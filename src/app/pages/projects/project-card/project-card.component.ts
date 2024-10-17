import { ChangeDetectionStrategy, Component, inject, input, OnInit, Renderer2 } from '@angular/core';
import { Project } from '@api/interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'project-card',
    standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIcon,
        NgOptimizedImage,
        RouterLink,
    ],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
    project = input.required<Project>();
}
