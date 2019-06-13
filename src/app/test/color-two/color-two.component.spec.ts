import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTwoComponent } from './color-two.component';

describe('ColorTwoComponent', () => {
  let component: ColorTwoComponent;
  let fixture: ComponentFixture<ColorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
