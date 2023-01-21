import { Component } from '@angular/core';
import { WebsocketService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-cinemasession',
  templateUrl: './cinemasession.component.html',
  styleUrls: ['./cinemasession.component.sass'],
  providers: [WebsocketService]
})
export class CinemasessionComponent {
  private socket: WebSocket;
  constructor(){
    this.socket = new WebSocket('wss://mustafalou.com/ws');
    this.socket.onopen = (event) => {
      console.log('WebSocket connection established', event);
    };
  }
  startListener(){
    const iframe = document.getElementById('video') as HTMLIFrameElement;
    iframe.contentWindow?.document.querySelector('button[data-button-listener="play"]')?.addEventListener('click', () => {
      this.socket.send('play');
    })
  }
  public sendMessage() {
    this.socket.send('Hello server');
  }

}

