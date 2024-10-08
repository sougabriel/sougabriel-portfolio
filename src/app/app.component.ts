import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, NavbarComponent],
    template: `
        <navbar role="navigation">
            <router-outlet />
        </navbar>
    `,
    styles: ``,
})
export class AppComponent {}
