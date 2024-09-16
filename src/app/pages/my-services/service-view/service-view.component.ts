import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ServiceInfoComponent } from './service-info';
import { Office } from '@api/interfaces/offices';
import { OfficesService } from '@api/services/offices.service';
import { Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
    selector: 'service-view',
    standalone: true,
    imports: [MarkdownModule, ServiceInfoComponent],
    templateUrl: './service-view.component.html',
    styleUrl: './service-view.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceViewComponent {
    protected initialService: Office = {
        name: '',
        short_name: '',
        technologies: [],
        summary: '',
        documentUrl: '',
        images: [],
        thumbnail: ''
    };

    protected readonly officeService = inject(OfficesService);
    protected readonly router = inject(Router);
    protected selectedService = signal<Office>(this.initialService);

    constructor() {
        const route = this.router.url.split('/').pop();
        this.officeService.getOffice().subscribe((services) => {
          services.find((service) => {
                if (service.short_name == route) {
                    this.selectedService.set(service);
                }
            });
        });
    }
}
