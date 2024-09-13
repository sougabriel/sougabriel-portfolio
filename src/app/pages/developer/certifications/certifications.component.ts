import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { CertificationsService } from '@api/services/certifications.service';

@Component({
    selector: 'certifications',
    standalone: true,
    imports: [
        MatCardModule,
        MatTooltip,
        MatButtonModule,
        MatChipsModule,
        AsyncPipe,
        DatePipe,
    ],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
    protected readonly certificationService = inject(CertificationsService);
    protected readonly certifications$ = this.certificationService.getCertificates();
}
