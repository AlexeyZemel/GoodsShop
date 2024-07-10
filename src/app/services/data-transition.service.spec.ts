import { TestBed } from '@angular/core/testing';

import { DataTransitionService } from './data-transition.service';

describe('DataTransitionService', () => {
  let service: DataTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
