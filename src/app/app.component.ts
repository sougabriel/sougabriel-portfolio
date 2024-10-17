import { ChangeDetectionStrategy, Component, inject, Renderer2 } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { slideInAnimation } from './animation';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, NavbarComponent, AsyncPipe],
    template: `
        <navbar role="navigation">
            <main [@routeAnimations]="getRouteAnimationData()">
                <router-outlet />
            </main>
        </navbar>
    `,
    styles: ``,
    animations: [slideInAnimation],
})
export class AppComponent {
    protected readonly contexts = inject(ChildrenOutletContexts);

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
            'animation'
        ];
    }
}
