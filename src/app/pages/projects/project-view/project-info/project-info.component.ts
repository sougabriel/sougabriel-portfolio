import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '@api/interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-info',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatChipsModule, MatTooltip, RouterLink],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectInfoComponent {
    project = input.required<Project>();
}
