import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  value="ADD Server";
  serverName="abc";
  servercreated=false;
  CreateServerStatus="no server was created";
  servers=["Testserver","testserver 2"];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  onCreateServer()
  {
    this.CreateServerStatus="Server is created";
    this.servercreated=!this.servercreated;
    this.servers.push(this.serverName);
  }
  onUpdateServer(event: Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
