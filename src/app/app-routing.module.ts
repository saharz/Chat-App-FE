import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from "./join-room/join-room.component";
import {ChatInboxComponent} from "./chat-inbox/chat-inbox.component";

const routes: Routes = [
  { path: '',   redirectTo: '/createRoom', pathMatch: 'full' },
  { path: 'createRoom', component: CreateRoomComponent },
  { path: 'joinRoom', component: JoinRoomComponent },
  { path: 'chatRoom', component: ChatInboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
