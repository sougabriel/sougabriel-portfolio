import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { EducationService } from '@api/services/education.service';

@Component({
    selector: 'education',
    standalone: true,
    imports: [
        MatCardModule,
        MatTooltip,
        MatButtonModule,
        MatChipsModule,
        AsyncPipe,
        DatePipe,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
    protected readonly educationService = inject(EducationService);
    protected readonly education$ = this.educationService.getEducation();
}
