import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../common/services/chat.service';
// import { } from 'socket.io-client';
import { AppComponent } from './app.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import {UiMessagesUtilsService} from "../common/services/ui-messages-utils.service";
import { AppRoutingModule } from './app-routing.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import {WebServerService} from "../common/services/web-server.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    CreateRoomComponent,
    JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChatService, UiMessagesUtilsService, WebServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
