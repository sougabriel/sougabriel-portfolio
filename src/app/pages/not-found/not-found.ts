import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'not-found',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './not-found.html',
    styleUrls: ['./not-found.scss'],
    standalone: true,
    imports: [MatButtonModule, RouterLink],
})
export class NotFound {}
