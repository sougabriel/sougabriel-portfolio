import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { StyleManager } from '../style-manager';
import { Theme, ThemeStorage } from './theme-storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
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
    imports: [MatButtonModule, MatTooltip, MatMenuModule, MatIcon],
})
export class ThemePicker implements OnInit, OnDestroy {
    protected readonly styleManager = inject(StyleManager);
    protected readonly _themeStorage = inject(ThemeStorage);
    protected readonly _activatedRoute = inject(ActivatedRoute);
    protected readonly liveAnnouncer = inject(LiveAnnouncer);

    protected _queryParamSubscription = Subscription.EMPTY;
    protected currentTheme!: Theme;

    /**
     * List of themes to be displayed on menu. The name attribute must be equals
     * to the name of output theme that you generate on root of project.
     *
     * The first element in the list is the default value.
     */
    themes = input.required<Theme[]>();

    /**
     * Change theme picker display icon with Material Symbols & Icons icon_name.
     */
    pickerIcon = input<string>('palette');

    /**
     * Change tooltip text to be displayed.
     */
    tooltipText = input<string>('Select a theme for the page');

    ngOnInit() {
        const themeName = this._themeStorage.getStoredThemeName();
        if (themeName) {
            this.selectTheme(themeName);
        } else {
            try {
                this.selectTheme(this.themes().at(0)!.name);
            } catch {
                this.themes().find((theme) => {
                    if (theme.name !== null) {
                        this.selectTheme(theme.name);
                    }
                });
            }
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
        const theme = this.themes().find(
            (currentTheme) => currentTheme.name === themeName
        )!;

        this.currentTheme = theme;
        this.styleManager.setStyle('theme', `${theme.name}.css`);

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
