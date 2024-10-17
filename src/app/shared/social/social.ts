import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { contacts } from '@api/contacts';

@Component({
    selector: 'socials',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, MatTooltip, MatButtonModule],
    templateUrl: './social.html',
    styleUrl: './social.scss',
})
export class Social {
    height = input<string>('64');
    width = input<string>('64');

    protected readonly contacts = contacts;
}
