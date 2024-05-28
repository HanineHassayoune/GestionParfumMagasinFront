import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParfumComponent } from './edit-parfum.component';

describe('EditParfumComponent', () => {
  let component: EditParfumComponent;
  let fixture: ComponentFixture<EditParfumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParfumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
