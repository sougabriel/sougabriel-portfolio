import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperAbout {
    about = input.required<string>();
}
