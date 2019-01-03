import { TestBed, inject } from '@angular/core/testing';

import { StudentrecordService } from './studentrecord.service';

describe('StudentrecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentrecordService]
    });
  });

  it('should be created', inject([StudentrecordService], (service: StudentrecordService) => {
    expect(service).toBeTruthy();
  }));
});
