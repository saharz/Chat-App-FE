import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ChatService } from '../../common/services/chat.service';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ChatService, {provide: 'chatMessageListId', useValue: 'message-list'}]
})
export class ChatInboxComponent implements OnInit {
  public message: string;
  constructor(private chatService: ChatService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.chatService.setupChatConnection();
  }

  public sendMessage() {
    if (this.message !== '') {
      this.chatService.broadcastMyMessage(this.message);
      this.message = '';
    }
  }
}
