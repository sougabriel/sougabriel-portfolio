import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    protected readonly breakpointObserver = inject(BreakpointObserver);

    isHandset(): Observable<boolean> {
        const isHandset$ = this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(
                map((result) => result.matches),
                shareReplay()
            );
        return isHandset$;
    }
}
