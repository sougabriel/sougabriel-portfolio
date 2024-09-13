import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'services',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <router-outlet />
    `,
    styles: `
    :host {
        display: block;
        margin: 40px 0;
    }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyServicesComponent {}
