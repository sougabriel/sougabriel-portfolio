import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Developer } from '@api/interfaces';

@Component({
  selector: 'name',
  standalone: true,
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperName {
    developer = input.required<Developer>();
}
