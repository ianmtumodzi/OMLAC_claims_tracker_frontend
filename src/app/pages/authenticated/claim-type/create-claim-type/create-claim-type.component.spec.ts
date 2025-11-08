import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClaimTypeComponent } from './create-claim-type.component';

describe('CreateClaimTypeComponent', () => {
  let component: CreateClaimTypeComponent;
  let fixture: ComponentFixture<CreateClaimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClaimTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClaimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
