import { Component,OnInit } from '@angular/core';
import { WebsocketService } from 'src/services/web-socket.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cinemasession',
  templateUrl: './cinemasession.component.html',
  styleUrls: ['./cinemasession.component.sass'],
  providers: [WebsocketService]
})
export class CinemasessionComponent {
  private socket: WebSocket;
  safeUrl:any;
  constructor(private route:ActivatedRoute, private sanitizer: DomSanitizer){
    this.socket = new WebSocket('wss://mustafalou.com/ws');
    this.socket.onopen = (event) => {
      console.log('WebSocket connection established', event);
    };
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      let roomName = params['roomName'];
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://mustafalou.com/api/video_file/${roomName}`);
    });
  }
  log(param:any){
    console.log(param)
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

