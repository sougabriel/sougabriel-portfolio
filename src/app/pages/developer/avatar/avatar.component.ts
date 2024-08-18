import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Developer } from '@api/interfaces';

@Component({
    selector: 'avatar',
    standalone: true,
    imports: [NgOptimizedImage, MatTooltip, MatButtonModule],
    templateUrl: './avatar.component.html',
    styleUrl: './avatar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperAvatar {
    developer = input.required<Developer>();
}
