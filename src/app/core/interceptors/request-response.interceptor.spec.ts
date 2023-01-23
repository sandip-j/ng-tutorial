import { TestBed } from '@angular/core/testing';

import { RequestResponseInterceptor } from './request-response.interceptor';

describe('RequestResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestResponseInterceptor = TestBed.inject(RequestResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
