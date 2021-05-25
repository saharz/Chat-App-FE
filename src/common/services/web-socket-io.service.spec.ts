import { TestBed } from '@angular/core/testing';

import { WebSocketIoService } from './web-socket-io.service';

xdescribe('WebSockIoService', () => {
  let service: WebSocketIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
