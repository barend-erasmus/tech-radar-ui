import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRadarChartComponent } from './tech-radar-chart.component';

describe('TechRadarChartComponent', () => {
  let component: TechRadarChartComponent;
  let fixture: ComponentFixture<TechRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
