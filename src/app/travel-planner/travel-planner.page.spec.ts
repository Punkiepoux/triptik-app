import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelPlannerPage } from './travel-planner.page';

describe('TravelPlannerPage', () => {
  let component: TravelPlannerPage;
  let fixture: ComponentFixture<TravelPlannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
