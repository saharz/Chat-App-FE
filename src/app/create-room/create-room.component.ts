import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../common/services/chat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  title = 'Create a room';
  roomName: string = '';
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.setupChatConnection();
  }

  createRoom() {
    this.chatService.createNewRoom(this.roomName);
  }
}
