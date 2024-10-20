import { waitForAsync, TestBed } from '@angular/core/testing';
import { ThemePicker } from './theme-picker';

describe('ThemePicker', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({}).compileComponents();
    }));

    it('should install theme based on name', () => {
        const fixture = TestBed.createComponent(ThemePicker);
        const component = fixture.componentInstance;
        const name = 'magenta-violet';
    });
});
