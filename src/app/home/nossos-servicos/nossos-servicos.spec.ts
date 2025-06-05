import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosServicos } from './nossos-servicos';

describe('NossosServicos', () => {
  let component: NossosServicos;
  let fixture: ComponentFixture<NossosServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossosServicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosServicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
