import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'curriculum',
    standalone: true,
    imports: [MatIcon, MatButtonModule],
    templateUrl: './curriculum.component.html',
    styleUrl: './curriculum.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperCurriculum {}
