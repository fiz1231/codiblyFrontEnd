import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Endpoint1 } from './endpoint1';

describe('Endpoint1', () => {
  let component: Endpoint1;
  let fixture: ComponentFixture<Endpoint1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Endpoint1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Endpoint1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
