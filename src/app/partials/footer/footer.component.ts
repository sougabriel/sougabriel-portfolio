import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LicensesComponent } from './licenses/licenses.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Social } from '@shared/social/social';

@Component({
    selector: 'app-footer',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatToolbarModule, MatButtonModule, LicensesComponent, Social],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    protected readonly dialog = inject(MatDialog);

    protected openLicense(
        enterAnimationDuration: string,
        exitAnimationDuration: string
    ): void {
        this.dialog.open(LicensesComponent, {
            width: '512px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
}
