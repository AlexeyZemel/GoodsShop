import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherItemComponent } from './other-item.component';

describe('OtherItemComponent', () => {
  let component: OtherItemComponent;
  let fixture: ComponentFixture<OtherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
