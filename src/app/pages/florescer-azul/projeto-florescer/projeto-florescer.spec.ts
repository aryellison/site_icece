import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoFlorescer } from './projeto-florescer';

describe('ProjetoFlorescer', () => {
  let component: ProjetoFlorescer;
  let fixture: ComponentFixture<ProjetoFlorescer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoFlorescer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoFlorescer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
