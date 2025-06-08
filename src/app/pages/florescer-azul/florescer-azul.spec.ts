import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorescerAzul } from './florescer-azul';

describe('FlorescerAzul', () => {
  let component: FlorescerAzul;
  let fixture: ComponentFixture<FlorescerAzul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlorescerAzul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorescerAzul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
