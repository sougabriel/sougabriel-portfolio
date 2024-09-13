import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Office } from '@api/interfaces/offices';
import { CarouselComponent } from '@shared/carousel/carousel.component';

@Component({
    selector: 'service-info',
    standalone: true,
    imports: [MatButton, RouterLink, MatIcon, MatChip, CarouselComponent],
    templateUrl: './service-info.component.html',
    styleUrl: './service-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceInfoComponent {
    service = input.required<Office>();
}
