import { ChangeDetectionStrategy, Component, HostListener, inject, viewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { GithubIcon, LinkedInIcon } from '../social';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../partials';
import { BreakpointService } from '@shared/services';
import { Theme, ThemePicker } from 'ngx-theme-picker';
import { BackgroundComponent } from '@shared/background/background.component';

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
        BackgroundComponent,
    ],
})
export class NavbarComponent {
    protected readonly title = 'sougabriel'
    protected readonly breakpointService = inject(BreakpointService);
    protected readonly isHandset$ = this.breakpointService.isHandset();
    protected readonly drawer = viewChild<MatSidenav>('drawer');

    @HostListener('window:keyup.escape')
    toggleNavBar() {
        this.drawer()?.toggle();
    }

    protected readonly themes: Theme[] = [
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
