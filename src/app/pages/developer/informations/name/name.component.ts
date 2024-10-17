import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'name',
  standalone: true,
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperName {}
