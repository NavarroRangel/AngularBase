import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleVisibility } from './simple-visibility';

describe('SimpleVisibility', () => {
  let component: SimpleVisibility;
  let fixture: ComponentFixture<SimpleVisibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleVisibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleVisibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
