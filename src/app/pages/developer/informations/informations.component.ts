import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Developer } from '@api/interfaces';
import { DeveloperAbout } from './about/about.component';
import { DeveloperName } from './name/name.component';
import { DeveloperHeadline } from './headline/headline.component';
import { DeveloperCurriculum } from './curriculum/curriculum.component';

@Component({
  selector: 'informations',
  standalone: true,
  imports: [DeveloperAbout, DeveloperName, DeveloperHeadline, DeveloperCurriculum],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperInformations {
    developer = input.required<Developer>();
}
