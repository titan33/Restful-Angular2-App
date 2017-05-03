import { TestBed, inject } from '@angular/core/testing';

import { HotelService } from './hotel.service';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelService]
    });
  });

  it('should ...', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});
