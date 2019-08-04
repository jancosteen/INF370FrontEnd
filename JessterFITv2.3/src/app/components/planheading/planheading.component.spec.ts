import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanheadingComponent } from './planheading.component';

describe('PlanheadingComponent', () => {
  let component: PlanheadingComponent;
  let fixture: ComponentFixture<PlanheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
