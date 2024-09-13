import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OfficesService } from '@api/services/offices.service';
import { CardServiceComponent } from '../card-service';

@Component({
    selector: 'list-service',
    standalone: true,
    imports: [AsyncPipe, CardServiceComponent],
    templateUrl: './list-service.component.html',
    styleUrl: './list-service.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListServiceComponent {
    protected readonly officeService = inject(OfficesService);
    protected readonly services$ = this.officeService.getOffice();
}
