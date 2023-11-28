import { TestBed } from '@angular/core/testing';

import { CiviWidgetService } from './civi-widget.service';

describe('CiviWidgetService', () => {
  let service: CiviWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiviWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
