import { Injectable } from '@angular/core';
import { Experience } from '@api/interfaces/experience';
import { Observable, shareReplay } from 'rxjs';
import { BaseHttpClientService } from './base-http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ExperienceService extends BaseHttpClientService {
    protected readonly education$: Observable<Experience[]>;

    constructor() {
        super('experience');
        this.education$ = this.getAllExperience();
    }

    getExperience(): Observable<Experience[]> {
        return this.education$;
    }

    protected getAllExperience(): Observable<Experience[]> {
        return this.http
            .get<Experience[]>(this.api + this.file)
            .pipe(shareReplay());
    }
}
