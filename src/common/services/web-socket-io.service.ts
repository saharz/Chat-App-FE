import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import {Observable} from 'rxjs';

const SOCKET_ENDPOINT = 'localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class WebSocketIoService {
  private socket: any;
  constructor() { }

  public connect(): Observable<string> {
    let observable = new Observable<string>(observer => {
      this.socket = io(SOCKET_ENDPOINT);
      this.socket.on('broadcast-message', (data: string) => {
        observer.next(data);
      });
    })
    return observable;
  }

  public sendMessage(message: string){
    this.socket.emit('add-message', message);
  }

  public createNewRoom(roomName: string) {
    this.socket.emit('create-room', roomName);
  }
}
