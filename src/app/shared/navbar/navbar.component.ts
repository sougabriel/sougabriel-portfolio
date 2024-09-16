import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Renderer2,
    viewChild,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../partials';
import { BreakpointService } from '@shared/services';
import { BackgroundComponent } from '@shared/background/background.component';
import { ThemePicker } from '@shared/theme';
import { ScrollToTopComponent } from '../../partials/scroll/scroll-to-top.component';
import { NavigationRoutesComponent } from '@shared/navigation-routes/navigation-routes.component';
import { THEMES } from '@shared/theme/themes';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatTooltip,
        MatNavList,
        MatListItem,
        MatIcon,
        AsyncPipe,
        ThemePicker,
        RouterLink,
        RouterLinkActive,
        FooterComponent,
        BackgroundComponent,
        ScrollToTopComponent,
        NavigationRoutesComponent,
    ],
})
export class NavbarComponent {
    protected readonly isHandset$ = inject(BreakpointService).isHandset();
    protected readonly drawer = viewChild.required<MatSidenav>('drawer');
    protected readonly router = inject(Router);
    protected readonly renderer = inject(Renderer2);

    protected readonly themes = THEMES;


    constructor() {
        this.renderer.listen('document', 'keyup', (e) => {
            const event = e as KeyboardEvent;
            if (event.key === 'Escape') {
                this.drawer().toggle();
            }
        });

        this.renderer.listen('body', 'keypress', (e) => {
            const event = e as KeyboardEvent;
            if (this.drawer()?.opened) {
                switch (event.key) {
                    case '1':
                        this.router.navigate(['/about']);
                        break;
                    case '2':
                        this.router.navigate(['/projects']);
                        break;
                    case '3':
                        this.router.navigate(['/services']);
                        break;
                    default:
                        break;
                }
                this.drawer()?.close();
            }
        });
    }
}
