import { Injectable, EventEmitter } from '@angular/core';
import { Theme } from './theme';
import { THEMES } from '@shared/theme/themes';

@Injectable({ providedIn: 'root' })
export class ThemeStorage {
    protected readonly storageKey = 'theme';
    onThemeUpdate: EventEmitter<Theme> = new EventEmitter<Theme>();

    storeTheme(theme: Theme) {
        try {
            localStorage[this.storageKey] = theme.name;
        } catch {}
        this.onThemeUpdate.emit(theme);
    }

    getStoredThemeName(): string {
        try {
            return localStorage[this.storageKey] || THEMES[0].name;
        } catch {
            return THEMES[0].name;
        }
    }

    clearStorage() {
        try {
            localStorage.removeItem(this.storageKey);
        } catch {}
    }
}
