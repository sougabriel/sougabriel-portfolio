import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
    selector: 'app-licenses',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        CdkAccordionModule,
    ],
    templateUrl: './licenses.component.html',
    styleUrl: './licenses.component.scss',
})
export class LicensesComponent {
    protected readonly dialogRef = inject(MatDialogRef<LicensesComponent>);
}
