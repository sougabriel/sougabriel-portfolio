import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeveloperService } from '@api/services';
import { toSignal } from '@angular/core/rxjs-interop';
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
export class DeveloperComponent {
    protected readonly devService = inject(DeveloperService);
    protected readonly developer = toSignal(this.devService.getDeveloper());
}
