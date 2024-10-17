import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { certifications } from '@api/certifications';

@Component({
    selector: 'certifications',
    standalone: true,
    imports: [
        MatCardModule,
        MatTooltip,
        MatButtonModule,
        MatChipsModule,
        DatePipe,
    ],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
    protected readonly certifications = certifications;
}
