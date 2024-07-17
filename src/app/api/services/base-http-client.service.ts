import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export abstract class BaseHttpClientService {
    protected readonly api = environment.apiUrl;
    protected readonly http = inject(HttpClient);
    protected readonly file: string;

    constructor(file: string) {
        this.file = file + '.json';
    }
}
