import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactService } from '@api/services';
import { ClipboardModule } from '@angular/cdk/clipboard'

@Component({
    selector: 'socials',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, MatTooltipModule, ClipboardModule, AsyncPipe],
    templateUrl: './social.html',
    styleUrl: './social.scss',
})
export class Social {
    height = input<string>('64');
    width = input<string>('64');

    protected readonly contactService = inject(ContactService);
    protected readonly contacts$ = this.contactService.getContacts();
}
