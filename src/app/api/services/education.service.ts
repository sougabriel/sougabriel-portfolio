import { Injectable } from '@angular/core';
import { BaseHttpClientService } from './base-http-client.service';
import { Observable, shareReplay } from 'rxjs';
import { Education } from '@api/interfaces/education';

@Injectable({
    providedIn: 'root',
})
export class EducationService extends BaseHttpClientService {
    protected readonly education$: Observable<Education[]>;
    
    constructor() {
        super('education');
        this.education$ = this.getAllEducation();
    }
    
    getEducation(): Observable<Education[]> {
      return this.education$;
    }

    protected getAllEducation(): Observable<Education[]> {
      return this.http.get<Education[]>(this.api + this.file).pipe(shareReplay());
    }
}
