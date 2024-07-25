import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarRef,
} from '@angular/material/snack-bar';

/**
 * Class to show cookie popup and set it on localStorage if accepted.
 * Provide 'showMessageFromComponent' method to implement cookie logic in your application.
 */
@Injectable({
    providedIn: 'root',
})
export class CookiePopup {
    protected readonly messageBar = inject(MatSnackBar);
    protected readonly STORAGE_KEY: string = 'cookies';
    protected hasAccepted: boolean = false;

    constructor() {
        // Needs to be in a try/catch, because some browsers will
        // throw when using `localStorage` in private mode.
        try {
            this.hasAccepted =
                localStorage.getItem(this.STORAGE_KEY) === 'true';
        } catch {}
    }

    /**
     * Display a simple message with one accept button.
     *
     * @param message Text to be displayed in the message.
     * @param buttonText Text to be displayed in the accept button.
     * @param config Extra configs to message.
     * @returns True when user accept cookies.
     */
    showSimpleMessage(
        message: string,
        buttonText: string,
        config?: MatSnackBarConfig
    ): boolean {
        if (this.hasAccepted == false) {
            const popup = this.messageBar.open(message, buttonText, config);
            popup.onAction().subscribe(() => {
                this.accept();
            });
            return true;
        }
        return false;
    }

    /**
     * Display a message with the component param content.
     *
     * @param component Component to be instantiated and displayed in message.
     * @param config Extra configs to message.
     * @returns Message bar with methods to implements the logic of cookie.
     */
    showMessageFromComponent(
        component: ComponentType<any>,
        config?: MatSnackBarConfig
    ): MatSnackBarRef<any> {
        return this.messageBar.openFromComponent(component, config);
    }

    /** Accepts the cookie disclaimer. */
    protected accept() {
        try {
            localStorage.setItem(this.STORAGE_KEY, 'true');
        } catch {}
        this.hasAccepted = true;
    }
}
