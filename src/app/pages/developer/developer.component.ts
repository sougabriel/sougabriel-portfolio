import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeveloperAvatar } from './avatar';
import { DeveloperInformations } from './informations';
import { CertificationsComponent } from './certifications';
import { EducationComponent } from './education';

@Component({
    selector: 'developer',
    standalone: true,
    imports: [
        DeveloperAvatar,
        DeveloperInformations,
        CertificationsComponent,
        EducationComponent,
    ],
    templateUrl: './developer.component.html',
    styleUrl: './developer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperComponent {}
