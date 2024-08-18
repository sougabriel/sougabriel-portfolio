import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'curriculum',
    standalone: true,
    imports: [MatIcon, MatButtonModule, RouterLink],
    templateUrl: './curriculum.component.html',
    styleUrl: './curriculum.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperCurriculum {}
