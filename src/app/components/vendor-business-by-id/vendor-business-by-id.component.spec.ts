import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBusinessByIdComponent } from './vendor-business-by-id.component';

describe('VendorBusinessByIdComponent', () => {
  let component: VendorBusinessByIdComponent;
  let fixture: ComponentFixture<VendorBusinessByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorBusinessByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorBusinessByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
