import { ChangeDetectionStrategy, Component, HostListener, inject, signal, viewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { Theme, ThemePicker } from '../theme';
import { MatTooltip } from '@angular/material/tooltip';
import { GithubIcon, LinkedInIcon } from '../social/icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../partials/footer/footer.component';
import { BreakpointService } from '../services';

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
        GithubIcon,
        LinkedInIcon,
        RouterLink,
        RouterLinkActive,
        FooterComponent,
    ],
})
export class NavbarComponent {
    protected readonly title = signal('Gabriel de Souza');
    protected readonly breakpointService = inject(BreakpointService);
    protected readonly isHandset$ = this.breakpointService.isHandset();
    protected drawer = viewChild<MatSidenav>('drawer');

    @HostListener('window:keyup.escape')
    toggleNavBar() {
        this.drawer()?.toggle();
    }

    protected themes: Theme[] = [
        {
            color: '#d7e3ff',
            displayName: 'Azure & Blue',
            name: 'azure-blue',
            background: '#fdfbff'
        },
        {
            color: '#ffd9e1',
            displayName: 'Rose & Red',
            name: 'rose-red',
            background: '#fffbff'
        },
        {
            color: '#810081',
            displayName: 'Magenta & Violet',
            name: 'magenta-violet',
            background: '#1e1a1d'
        },
        {
            color: '#004f4f',
            displayName: 'Cyan & Orange',
            name: 'cyan-orange',
            background: '#191c1c'
        },
    ];
}
