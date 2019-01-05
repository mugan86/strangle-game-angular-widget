import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangleComponent } from './strangle.component';

describe('StrangleComponent', () => {
  let component: StrangleComponent;
  let fixture: ComponentFixture<StrangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
