import { Injectable } from '@angular/core';
const RIGHT_MSG_CLASS = 'right';
@Injectable({
  providedIn: 'root'
})
export class UiMessagesUtilsService {
  private _messageListId: string = '';
  constructor() {}

  private createLiElement(innerHtml: string, withRightClass?: boolean) {
    const liElement = document.createElement('li');
    liElement.innerHTML = innerHtml;
    if (withRightClass) {
      liElement.className = RIGHT_MSG_CLASS;
    }
    return  liElement;
  }

  private appendLiToUl(liElem: HTMLLIElement) {
    const UlElement = document.getElementById(this._messageListId);
    if (UlElement && liElem) {
      UlElement.appendChild(liElem);
    }
  }

  public setMessageListElementId(value: string) {
    this._messageListId = value;
  }

  public addBroadcastMessageToChat(broadcastMsg: string) {
    const liElement = this.createLiElement(broadcastMsg);
    this.appendLiToUl(liElement);
  }

  public addMyBroadcastMessageToChat(myBroadcastMsg: string) {
    const liElement = this.createLiElement(myBroadcastMsg, true);
    this.appendLiToUl(liElement);
  }
}
