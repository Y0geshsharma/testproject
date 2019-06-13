import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThreeComponent } from './color-three.component';

describe('ColorThreeComponent', () => {
  let component: ColorThreeComponent;
  let fixture: ComponentFixture<ColorThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
