import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContateNos } from './contate-nos';

describe('ContateNos', () => {
  let component: ContateNos;
  let fixture: ComponentFixture<ContateNos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContateNos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContateNos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
