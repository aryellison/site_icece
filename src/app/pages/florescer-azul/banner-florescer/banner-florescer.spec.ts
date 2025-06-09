import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFlorescer } from './banner-florescer';

describe('BannerFlorescer', () => {
  let component: BannerFlorescer;
  let fixture: ComponentFixture<BannerFlorescer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerFlorescer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFlorescer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
