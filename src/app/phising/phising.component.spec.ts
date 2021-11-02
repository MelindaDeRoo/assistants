import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhisingComponent } from './phising.component';

describe('PhisingComponent', () => {
  let component: PhisingComponent;
  let fixture: ComponentFixture<PhisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
