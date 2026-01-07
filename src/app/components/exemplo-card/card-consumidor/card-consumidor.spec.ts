import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsumidor } from './card-consumidor';

describe('CardConsumidor', () => {
  let component: CardConsumidor;
  let fixture: ComponentFixture<CardConsumidor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConsumidor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConsumidor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
