import { Injectable } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { Developer } from '../interfaces';
import { BaseHttpClientService } from './base-http-client.service';

@Injectable({
    providedIn: 'root',
})
export class DeveloperService extends BaseHttpClientService {
    protected readonly developer$: Observable<Developer>;

    constructor() {
        super('developer');
        this.developer$ = this.getDeveloperHTTP();
    }

    getDeveloper(): Observable<Developer> {
        return this.developer$;
    }

    protected getDeveloperHTTP(): Observable<Developer> {
        return this.http.get<Developer>(this.api + this.file).pipe(shareReplay());
    }
}
