import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssessmentsComponent } from './edit-assessments.component';

describe('EditAssessmentsComponent', () => {
  let component: EditAssessmentsComponent;
  let fixture: ComponentFixture<EditAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
