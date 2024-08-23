import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'projects',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
    template: `<router-outlet />`,
    styles: `
    :host {
        display: block;
        margin: 40px 0; 
    }
    `,
})
export class Projects {}
