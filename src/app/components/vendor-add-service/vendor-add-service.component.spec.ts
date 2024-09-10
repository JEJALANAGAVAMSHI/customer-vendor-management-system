import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddServiceComponent } from './vendor-add-service.component';

describe('VendorAddServiceComponent', () => {
  let component: VendorAddServiceComponent;
  let fixture: ComponentFixture<VendorAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorAddServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
