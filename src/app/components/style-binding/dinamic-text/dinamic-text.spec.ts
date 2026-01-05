import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicText } from './dinamic-text';

describe('DinamicText', () => {
  let component: DinamicText;
  let fixture: ComponentFixture<DinamicText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
