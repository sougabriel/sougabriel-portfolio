import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'navigation-routes',
    standalone: true,
    imports: [MatButtonModule, MatIcon, RouterLink, RouterLinkActive],
    templateUrl: './navigation-routes.component.html',
    styleUrl: './navigation-routes.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRoutesComponent {
    scrollToTop() {
        window.scrollTo({ top: 0 });
    }
}
