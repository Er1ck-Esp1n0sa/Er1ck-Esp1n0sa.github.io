import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteressComponent } from './interess.component';

describe('InteressComponent', () => {
  let component: InteressComponent;
  let fixture: ComponentFixture<InteressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
