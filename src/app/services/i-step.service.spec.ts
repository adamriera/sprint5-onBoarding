import { TestBed } from '@angular/core/testing';

import { IStepService } from './i-step.service';

describe('IStepService', () => {
  let service: IStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
