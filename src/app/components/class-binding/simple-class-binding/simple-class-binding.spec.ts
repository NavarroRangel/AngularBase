import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleClassBinding } from './simple-class-binding';

describe('SimpleClassBinding', () => {
  let component: SimpleClassBinding;
  let fixture: ComponentFixture<SimpleClassBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleClassBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleClassBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
