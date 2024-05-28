import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParfumComponent } from './gestion-parfum.component';

describe('GestionParfumComponent', () => {
  let component: GestionParfumComponent;
  let fixture: ComponentFixture<GestionParfumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParfumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
