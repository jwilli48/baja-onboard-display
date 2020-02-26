import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeTestComponent } from './gauge-test.component';

describe('GaugeTestComponent', () => {
  let component: GaugeTestComponent;
  let fixture: ComponentFixture<GaugeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
