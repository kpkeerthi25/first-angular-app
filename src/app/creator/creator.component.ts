import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Server} from '../shared/server.model'

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  name: string = ""
  type: string = ""
  count: number = 0
  
  @Output() onDatePicked: EventEmitter<Server> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  onUpdateType(event: Event) {
    this.type = (<HTMLInputElement>event.target).value;
  }
  
  onUpdateCount(event: Event) {
    this.count = parseInt((<HTMLInputElement>event.target).value);
  }

  print(){
    console.log(this.name,this.type,this.count)
  }

  onCreateServer() {
    this.onDatePicked.emit(new Server(this.name,this.type,this.count))
  }

}
