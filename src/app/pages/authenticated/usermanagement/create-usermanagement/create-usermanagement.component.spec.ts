import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsermanagementComponent } from './create-usermanagement.component';

describe('CreateUsermanagementComponent', () => {
  let component: CreateUsermanagementComponent;
  let fixture: ComponentFixture<CreateUsermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUsermanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
