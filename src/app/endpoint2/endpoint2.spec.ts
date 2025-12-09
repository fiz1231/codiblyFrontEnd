import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Endpoint2 } from './endpoint2';

describe('Endpoint2', () => {
  let component: Endpoint2;
  let fixture: ComponentFixture<Endpoint2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Endpoint2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Endpoint2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
