import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOffersComponent } from './vendor-offers.component';

describe('VendorOffersComponent', () => {
  let component: VendorOffersComponent;
  let fixture: ComponentFixture<VendorOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
