import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRoutesComponent } from './navigation-routes.component';

describe('NavigationRoutesComponent', () => {
  let component: NavigationRoutesComponent;
  let fixture: ComponentFixture<NavigationRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationRoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
