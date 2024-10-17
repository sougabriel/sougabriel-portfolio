import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'headline',
    standalone: true,
    imports: [],
    templateUrl: './headline.component.html',
    styleUrl: './headline.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperHeadline {}
