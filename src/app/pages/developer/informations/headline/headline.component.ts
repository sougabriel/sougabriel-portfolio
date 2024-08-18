import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Developer } from '@api/interfaces';

@Component({
    selector: 'headline',
    standalone: true,
    imports: [],
    templateUrl: './headline.component.html',
    styleUrl: './headline.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperHeadline {
    developer = input.required<Developer>();
}
