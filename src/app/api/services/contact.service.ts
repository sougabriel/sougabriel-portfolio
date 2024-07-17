import { Injectable } from '@angular/core';
import { Observable, shareReplay, take } from 'rxjs';
import { Contact } from '../interfaces';
import { BaseHttpClientService } from './base-http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ContactService extends BaseHttpClientService {
    protected readonly contacts$: Observable<Contact[]>;

    constructor() {
        super('contacts');
        this.contacts$ = this.getAllContacts();
    }


    getContacts(): Observable<Contact[]> {
        return this.contacts$;
    }

    protected getAllContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.api + this.file).pipe(shareReplay());
    }
}
