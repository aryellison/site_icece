import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concursos } from './concursos';

describe('Concursos', () => {
  let component: Concursos;
  let fixture: ComponentFixture<Concursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
