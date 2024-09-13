import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageCarousel } from './imageCarousel';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'carousel',
    standalone: true,
    imports: [MatButtonModule, MatIcon, NgOptimizedImage],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
      trigger('carouselAnimation', [
        transition('void => *', [
          style({ opacity: 0 }),
          animate('300ms', style({ opacity: 1 }))
        ]),
        transition('* => void', [
          animate('300ms', style({ opacity: 0 }))
        ])
      ])
    ]
})
export class CarouselComponent {
  images = input.required<ImageCarousel[]>();
  protected currentImage = 0;

  onPreviousClick() {
    const previous = this.currentImage - 1;
    this.currentImage = previous < 0 ? this.images().length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentImage + 1;
    this.currentImage = next === this.images().length ? 0 : next;
  }
}
