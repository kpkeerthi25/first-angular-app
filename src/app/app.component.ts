import { Component } from '@angular/core';
import {Server} from './shared/server.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers:Server[] = [new Server("ser1","basic",3) ,new Server("ser2","basic",3) ]
  title = 'first-angular-app';

  addServer(data:Server){
    this.servers.push(data)
  }
}
