import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { education } from '@api/education';

@Component({
    selector: 'education',
    standalone: true,
    imports: [
        MatCardModule,
        MatTooltip,
        MatButtonModule,
        MatChipsModule,
        DatePipe,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
    protected readonly education = education;
}
