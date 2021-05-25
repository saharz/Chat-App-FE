import { TestBed } from '@angular/core/testing';

import { UiMessagesUtilsService } from './ui-messages-utils.service';

xdescribe('UiMessagesUtilsService', () => {
  let service: UiMessagesUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiMessagesUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
