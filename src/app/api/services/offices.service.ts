import { Injectable } from '@angular/core';
import { BaseHttpClientService } from './base-http-client.service';
import { Observable, shareReplay } from 'rxjs';
import { Office } from '@api/interfaces/offices';

@Injectable({
    providedIn: 'root',
})
export class OfficesService extends BaseHttpClientService {
    protected readonly office$: Observable<Office[]>;

    constructor() {
        super('services');
        this.office$ = this.getAllOffices();
    }

    getOffice(): Observable<Office[]> {
        return this.office$;
    }

    protected getAllOffices(): Observable<Office[]> {
        return this.http
            .get<Office[]>(this.api + this.file)
            .pipe(shareReplay());
    }
}
