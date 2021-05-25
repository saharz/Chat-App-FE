import {Inject, Injectable, OnDestroy, Optional} from '@angular/core';
import {UiMessagesUtilsService} from "./ui-messages-utils.service";
import {WebSocketIoService} from "./web-socket-io.service";
import {WebServerService} from "./web-server.service";
import {MESSAGE_TYPE} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnDestroy{
  private connection: any = null;

  constructor(private uiMsgUtils: UiMessagesUtilsService,
              private webSocketIoService: WebSocketIoService,
              private webServerService: WebServerService,
              @Inject('chatMessageListId') @Optional() private msgListId: string) {
    this.uiMsgUtils.setMessageListElementId(this.msgListId);
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }

  public setupChatConnection() {
    if (!this.connection) {
      this.connection = this.webSocketIoService.connect().subscribe(message => {
        if (message) {
          // if (message === MESSAGE_TYPE.CREATED) {
          //   console.log(message);
          // } else if (message === MESSAGE_TYPE.JOINED) {
          //   console.log(message);
          // } else {
          this.uiMsgUtils.addBroadcastMessageToChat(message);
          // }
        }
      });
    }
  }

  public broadcastMyMessage(msg: string) {
    this.webSocketIoService.sendMessage(msg);
    this.uiMsgUtils.addMyBroadcastMessageToChat(msg);
  }

  public createNewRoom(roomName: string) {
    // return this.webSocketIoService.createNewRoom(roomName);
  }

  public goToRoom(roomName: string) {

  }
}
