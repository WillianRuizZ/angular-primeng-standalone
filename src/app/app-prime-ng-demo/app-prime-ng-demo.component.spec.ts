import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgDemoComponent } from './app-prime-ng-demo.component';

describe('AppPrimeNgDemoComponent', () => {
  let component: PrimeNgDemoComponent;
  let fixture: ComponentFixture<PrimeNgDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNgDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
