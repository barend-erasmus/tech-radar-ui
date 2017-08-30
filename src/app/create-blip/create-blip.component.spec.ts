import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlipComponent } from './create-blip.component';

describe('CreateBlipComponent', () => {
  let component: CreateBlipComponent;
  let fixture: ComponentFixture<CreateBlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
