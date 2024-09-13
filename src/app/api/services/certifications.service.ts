import { Injectable } from '@angular/core';
import { BaseHttpClientService } from './base-http-client.service';
import { Observable, shareReplay } from 'rxjs';
import { Certificate } from '@api/interfaces/certifications';

@Injectable({
    providedIn: 'root',
})
export class CertificationsService extends BaseHttpClientService {
    protected readonly certificates$: Observable<Certificate[]>;

    constructor() {
        super('certifications');
        this.certificates$ = this.getAllCertificates();
    }

    getCertificates(): Observable<Certificate[]> {
      return this.certificates$;
    }

    protected getAllCertificates(): Observable<Certificate[]> {
      return this.http.get<Certificate[]>(this.api + this.file).pipe(shareReplay());
    }
}
