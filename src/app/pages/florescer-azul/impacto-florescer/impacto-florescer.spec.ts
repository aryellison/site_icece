import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoFlorescer } from './impacto-florescer';

describe('ImpactoFlorescer', () => {
  let component: ImpactoFlorescer;
  let fixture: ComponentFixture<ImpactoFlorescer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactoFlorescer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactoFlorescer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
