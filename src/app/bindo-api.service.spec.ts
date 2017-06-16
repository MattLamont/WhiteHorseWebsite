import { TestBed, inject } from '@angular/core/testing';

import { BindoApiService } from './bindo-api.service';

describe('BindoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BindoApiService]
    });
  });

  it('should ...', inject([BindoApiService], (service: BindoApiService) => {
    expect(service).toBeTruthy();
  }));
});
