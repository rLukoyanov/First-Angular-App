import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatinonStatus = 'No server was created';
  serverName = 'Test Name';
  serverCreated = false;
  servers = ['testserver', 'testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatinonStatus =
      'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
