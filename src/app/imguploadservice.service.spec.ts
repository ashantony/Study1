import { TestBed, inject } from '@angular/core/testing';

import { ImguploadserviceService } from './imguploadservice.service';

describe('ImguploadserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImguploadserviceService]
    });
  });

  it('should be created', inject([ImguploadserviceService], (service: ImguploadserviceService) => {
    expect(service).toBeTruthy();
  }));
});
