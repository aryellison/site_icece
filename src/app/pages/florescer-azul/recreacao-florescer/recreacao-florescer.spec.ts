import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreacaoFlorescer } from './recreacao-florescer';

describe('RecreacaoFlorescer', () => {
  let component: RecreacaoFlorescer;
  let fixture: ComponentFixture<RecreacaoFlorescer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecreacaoFlorescer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecreacaoFlorescer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
