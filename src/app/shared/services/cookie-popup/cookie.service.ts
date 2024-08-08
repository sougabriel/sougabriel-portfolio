import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable, OnDestroy } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarRef,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

/**
 * Class to show cookie popup and set it on localStorage if accepted.
 * Provide 'showMessageFromComponent' method to implement cookie logic in your application.
 */
@Injectable({
    providedIn: 'root',
})
export class CookiePopup implements OnDestroy {
    protected readonly subscriptions = new Subscription();
    protected readonly messageBar = inject(MatSnackBar);
    protected readonly STORAGE_KEY: string = 'cookies';
    protected hasAccepted: boolean = false;

    constructor() {
        // Needs to be in a try/catch, because some browsers will
        // throw when using `localStorage` in private mode.
        try {
            this.hasAccepted = localStorage.getItem(this.STORAGE_KEY) === 'true';
            if (this.hasAccepted) {
                this.ngOnDestroy();
            }
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
            this.subscriptions.add(
                popup.onAction().subscribe(() => {
                    this.accept();
                })
            );
            return true;
        }
        return false;
    }

    /**
     * Display a message with the component param content. The unsubscribe logic is on your own.
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
        this.ngOnDestroy();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
