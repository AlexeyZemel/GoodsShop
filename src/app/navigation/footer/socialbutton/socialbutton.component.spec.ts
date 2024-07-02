import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonComponent } from './socialbutton.component';

describe('SocialbuttonComponent', () => {
  let component: SocialbuttonComponent;
  let fixture: ComponentFixture<SocialbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
