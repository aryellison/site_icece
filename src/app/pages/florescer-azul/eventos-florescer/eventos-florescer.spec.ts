import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosFlorescer } from './eventos-florescer';

describe('EventosFlorescer', () => {
  let component: EventosFlorescer;
  let fixture: ComponentFixture<EventosFlorescer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosFlorescer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosFlorescer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
