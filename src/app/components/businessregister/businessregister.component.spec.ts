import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRegisterComponent } from './businessregister.component';

describe('BusinessregisterComponent', () => {
  let component: BusinessRegisterComponent;
  let fixture: ComponentFixture<BusinessRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
