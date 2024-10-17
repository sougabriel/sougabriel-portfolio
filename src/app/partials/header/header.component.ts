import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  Renderer2,
  signal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { NavigationRoutesComponent } from '@shared/navigation-routes';
import { BreakpointService } from '@shared/services';
import { ThemePicker } from '@shared/theme';
import { THEMES } from '@shared/theme/themes';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIcon,
        MatTooltip,
        AsyncPipe,
        ThemePicker,
        NavigationRoutesComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('openClose', [
            state('open', style({})),
            state(
                'closed',
                style({
                    opacity: 0.8,
                    top: -100,
                })
            ),
            transition('open => closed', [animate('1s')]),
            transition('closed => open', [animate('0.5s')]),
        ]),
    ],
})
export class HeaderComponent implements OnDestroy {
    drawer = input.required<MatDrawer>();
    protected readonly themes = THEMES;
    protected readonly isHandset$ = inject(BreakpointService).isHandset();
    protected readonly renderer = inject(Renderer2);

    protected unListen: () => void;
    protected readonly isOpen = signal<boolean>(true);
    protected readonly lastScroll = signal<number>(0);

    constructor() {
        this.unListen = this.renderer.listen('document', 'scroll', (e) => {
            if (this.lastScroll() < scrollY) {
                this.isOpen.set(false);
                this.lastScroll.set(scrollY);
            } else {
                this.isOpen.set(true);
                this.lastScroll.set(scrollY);
            }
        });
    }

    ngOnDestroy(): void {
        this.unListen();
    }
}
