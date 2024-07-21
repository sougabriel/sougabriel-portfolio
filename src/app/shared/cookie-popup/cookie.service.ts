import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class CookieService {
    protected readonly messageBar = inject(MatSnackBar);
    protected readonly STORAGE_KEY: string = 'cookies';
    protected hasAccepted: boolean = false;

    constructor() {
        // Needs to be in a try/catch, because some browsers will
        // throw when using `localStorage` in private mode.
        try {
            this.hasAccepted = localStorage.getItem(this.STORAGE_KEY) === 'true';
        } catch {}
    }

    showMessage(): boolean {
        if (this.hasAccepted == false) {
            const message = this.messageBar.open(
                'This site does not uses cookies! Have a good time browsing.',
                'Okay'
            );
            message.onAction().subscribe(() => {
                this.accept();
            });
            return true;
        }
        return false;
    }

    /** Accepts the cookie disclaimer. */
    protected accept() {
        try {
            localStorage.setItem(this.STORAGE_KEY, 'true');
        } catch {}
        this.hasAccepted = true;
    }
}
