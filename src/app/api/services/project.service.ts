import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Project } from '../interfaces';
import { BaseHttpClientService } from './base-http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService extends BaseHttpClientService {
    protected readonly projects$: Observable<Project[]>;

    constructor() {
        super('projects');
        this.projects$ = this.getAllProjects();
    }

    getProjects(): Observable<Project[]> {
        return this.projects$;
    }

    protected getAllProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.api + this.file).pipe(shareReplay());
    }
}
