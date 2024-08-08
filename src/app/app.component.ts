import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookiePopup } from '@shared/services/cookie-popup/cookie.service';
import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, NavbarComponent],
    template: `
        <navbar>
            <router-outlet />
        </navbar>
    `,
    styles: ``,
})
export class AppComponent {
    protected readonly cookieService = inject(CookiePopup);
    constructor() {
        this.cookieService.showSimpleMessage(
            'This site does not uses cookies! Have a good time browsing.',
            'Okay'
        );
    }
}
