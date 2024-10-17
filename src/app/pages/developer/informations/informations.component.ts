import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeveloperAbout } from './about';
import { DeveloperName } from './name';
import { DeveloperHeadline } from './headline';
import { DeveloperCurriculum } from './curriculum';

@Component({
    selector: 'informations',
    standalone: true,
    imports: [
        DeveloperAbout,
        DeveloperName,
        DeveloperHeadline,
        DeveloperCurriculum,
    ],
    templateUrl: './informations.component.html',
    styleUrl: './informations.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperInformations {}
