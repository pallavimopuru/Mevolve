import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevolveContainerComponent } from './mevolve-container.component';

describe('MevolveContainerComponent', () => {
  let component: MevolveContainerComponent;
  let fixture: ComponentFixture<MevolveContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MevolveContainerComponent]
    });
    fixture = TestBed.createComponent(MevolveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
