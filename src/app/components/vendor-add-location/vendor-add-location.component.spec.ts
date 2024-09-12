import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddLocationComponent } from './vendor-add-location.component';

describe('VendorAddLocationComponent', () => {
  let component: VendorAddLocationComponent;
  let fixture: ComponentFixture<VendorAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorAddLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
