import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { DeveloperService } from '../../api';
import { Social } from '../../shared/social/social';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'homepage',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgOptimizedImage,
        MatTooltip,
        MatButtonModule,
        MatIcon,
        Social,
        AsyncPipe,
        Social,
        RouterLink,
    ],
    templateUrl: './homepage.html',
    styleUrl: './homepage.scss',
})
export class Homepage {
    protected readonly devService = inject(DeveloperService);
    protected readonly developer$ = this.devService.getDeveloper();
}
