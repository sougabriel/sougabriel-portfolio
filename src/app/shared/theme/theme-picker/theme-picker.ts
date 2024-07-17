import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { StyleManager } from '../style-manager/style-manager.service';
import { Theme, ThemeStorage } from './theme-storage/index';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
    selector: 'theme-picker',
    templateUrl: 'theme-picker.html',
    styleUrls: ['theme-picker.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, MatTooltipModule, MatMenuModule, MatIconModule],
})
export class ThemePicker implements OnInit, OnDestroy {
    protected readonly styleManager = inject(StyleManager);
    protected readonly _themeStorage = inject(ThemeStorage);
    protected readonly _activatedRoute = inject(ActivatedRoute);
    protected readonly liveAnnouncer = inject(LiveAnnouncer);

    protected _queryParamSubscription = Subscription.EMPTY;
    protected currentTheme!: Theme;

    themes = input.required<Theme[]>();

    ngOnInit() {
        const themeName = this._themeStorage.getStoredThemeName();
        if (themeName) {
            this.selectTheme(themeName);
        } else {
            this.themes().find((themes) => {
                if (themes.isDefault === true) {
                    this.selectTheme(themes.name);
                }
            });
        }
        this._queryParamSubscription = this._activatedRoute.queryParamMap
            .pipe(map((params: ParamMap) => params.get('theme')))
            .subscribe((themeName: string | null) => {
                if (themeName) {
                    this.selectTheme(themeName);
                }
            });
    }

    ngOnDestroy() {
        this._queryParamSubscription.unsubscribe();
    }

    protected selectTheme(themeName: string) {
        const theme =
            this.themes().find(
                (currentTheme) => currentTheme.name === themeName
            ) || this.themes().find((currentTheme) => currentTheme.isDefault)!;

        this.currentTheme = theme;

        if (theme.isDefault) {
            this.styleManager.removeStyle('theme');
        } else {
            this.styleManager.setStyle('theme', `${theme.name}.css`);
        }

        if (this.currentTheme) {
            this.liveAnnouncer.announce(
                `${theme.displayName} theme selected.`,
                'polite',
                3000
            );
            this._themeStorage.storeTheme(this.currentTheme);
        }
    }
}
