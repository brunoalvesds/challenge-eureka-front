import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BingService } from './bing.service';

describe('BingService', () => {
  let service: BingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
