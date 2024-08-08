import { ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { provideMarkdown } from 'ngx-markdown';

const prefersReducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches ? 'noop' : 'animations';

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        provideRouter(routes),
        provideAnimationsAsync(prefersReducedMotion),
        provideHttpClient(withFetch()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:20000',
        }),
        provideMarkdown({
            loader: HttpClient,
        }),
    ],
};
