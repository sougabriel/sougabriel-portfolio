import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OfficesService } from '@api/services/offices.service';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
    selector: 'service-list',
    standalone: true,
    imports: [AsyncPipe, ServiceCardComponent],
    templateUrl: './service-list.component.html',
    styleUrl: './service-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceListComponent {
    protected readonly officeService = inject(OfficesService);
    protected readonly services$ = this.officeService.getOffice();
}
