import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusinessByIdComponent } from './get-business-by-id.component';

describe('GetBusinessByIdComponent', () => {
  let component: GetBusinessByIdComponent;
  let fixture: ComponentFixture<GetBusinessByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetBusinessByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBusinessByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
