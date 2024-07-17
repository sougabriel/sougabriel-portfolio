import { Injectable, EventEmitter } from '@angular/core';
import { Theme } from './theme';

@Injectable({ providedIn: 'root' })
export class ThemeStorage {
    static storageKey = 'theme';
    onThemeUpdate: EventEmitter<Theme> = new EventEmitter<Theme>();

    storeTheme(theme: Theme) {
        try {
            window.localStorage[ThemeStorage.storageKey] = theme.name;
        } catch {}
        this.onThemeUpdate.emit(theme);
    }

    getStoredThemeName(): string | null {
        try {
            return window.localStorage[ThemeStorage.storageKey] || null;
        } catch {
            return null;
        }
    }

    clearStorage() {
        try {
            window.localStorage.removeItem(ThemeStorage.storageKey);
        } catch {}
    }
}
