import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDetailsComponent } from './number-details.component';

describe('NumberDetailsComponent', () => {
  let component: NumberDetailsComponent;
  let fixture: ComponentFixture<NumberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
