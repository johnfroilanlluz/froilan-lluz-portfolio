import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardPythonComponent } from './project-card-python.component';

describe('ProjectCardPythonComponent', () => {
  let component: ProjectCardPythonComponent;
  let fixture: ComponentFixture<ProjectCardPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardPythonComponent]
    });
    fixture = TestBed.createComponent(ProjectCardPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
