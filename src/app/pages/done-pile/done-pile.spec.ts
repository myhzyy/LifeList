import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonePile } from './done-pile';

describe('DonePile', () => {
  let component: DonePile;
  let fixture: ComponentFixture<DonePile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonePile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonePile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
