import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCardComponent } from './goods-card.component';

describe('GoodsCardComponent', () => {
  let component: GoodsCardComponent;
  let fixture: ComponentFixture<GoodsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
