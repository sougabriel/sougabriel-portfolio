import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { ExperienceService } from '@api/services/experience.service';

@Component({
    selector: 'experience',
    standalone: true,
    imports: [
        MatCardModule,
        MatTooltip,
        MatButtonModule,
        MatChipsModule,
        AsyncPipe,
        DatePipe,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
    protected readonly experienceService = inject(ExperienceService);
    protected readonly experience$ = this.experienceService.getExperience();
}
