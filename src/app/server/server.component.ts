import { Component, Input, OnInit } from '@angular/core';
import {Server} from '../shared/server.model'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server:boolean = false
  serverName:string = "Test"
  servers = [0]
  i=0

  @Input() element: Server 

  constructor() { }

  ngOnInit(): void {
  }

  fun = () => {
    console.log("hello world")
  }

  capture(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
  }

  createServer() {
    this.servers.push(this.i+1)
    this.i++
  }
}
