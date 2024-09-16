import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { Office } from '@api/interfaces/offices';

@Component({
    selector: 'service-card',
    standalone: true,
    imports: [
        MatCardModule,
        MatChipsModule,
        RouterLink,
        NgOptimizedImage,
    ],
    templateUrl: './service-card.component.html',
    styleUrl: './service-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
    service = input.required<Office>();

    protected scrollToTop() {
        window.scrollTo({ top: 0 });
    }
}
