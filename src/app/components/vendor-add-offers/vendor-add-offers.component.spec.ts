import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddOffersComponent } from './vendor-add-offers.component';

describe('VendorAddOffersComponent', () => {
  let component: VendorAddOffersComponent;
  let fixture: ComponentFixture<VendorAddOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorAddOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAddOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
