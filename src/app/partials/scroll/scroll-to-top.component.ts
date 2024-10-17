import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    Renderer2,
    signal,
    viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'scroll-to-top',
    standalone: true,
    imports: [MatButtonModule, MatIcon, MatTooltip],
    template: `
        <button
            mat-mini-fab
            #scrollButton
            matTooltip="scroll to top"
            matTooltipPosition="above"
            [disabled]="this.isDisabled()"
        >
            <mat-icon>arrow_upward</mat-icon>
        </button>
    `,
    styles: `
        button {
            position: fixed;
            bottom: 4svh;
            right: 4svw;
            opacity: 0.5;
            &:hover {
                opacity: 1;
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopComponent implements AfterContentInit, OnDestroy {
    protected readonly scrollButton = viewChild.required('scrollButton', {
        read: ElementRef,
    });

    protected readonly isDisabled = signal<boolean>(true);
    protected readonly renderer = inject(Renderer2);
    protected unListen: () => void;

    constructor() {
        this.unListen = this.renderer.listen('window', 'scroll', () => {
            if (scrollY > 300) {
                this.isDisabled.set(false);
            } else {
                this.isDisabled.set(true);
            }
        });
    }
    ngAfterContentInit(): void {
        const scroll: HTMLElement = this.scrollButton().nativeElement;
        this.unListen = this.renderer.listen(scroll, 'click', () => {
            this.scrollToTop();
        });
    }

    scrollToTop() {
        window.scrollTo({ top: 0 });
    }

    ngOnDestroy(): void {
        this.unListen();
    }
}
