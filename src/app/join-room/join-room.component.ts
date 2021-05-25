import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  title = 'Join a room';
  constructor() { }

  ngOnInit(): void {
  }

}
