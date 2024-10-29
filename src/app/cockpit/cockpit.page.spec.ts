import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitPage } from './cockpit.page';

describe('CockpitPage', () => {
  let component: CockpitPage;
  let fixture: ComponentFixture<CockpitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
