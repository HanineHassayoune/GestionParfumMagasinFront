import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParfumComponent } from './ajout-parfum.component';

describe('AjoutParfumComponent', () => {
  let component: AjoutParfumComponent;
  let fixture: ComponentFixture<AjoutParfumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutParfumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
