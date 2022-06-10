import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../shared/event';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  
  @Input() event:IEvent | undefined

  @Output() eventClick = new EventEmitter() 

  title:string = "hello from thumbnail"

  turn(){
    const isEarly = this.event && this.event?.time === '8:00 am' 
    return {green:isEarly,bold:isEarly}
  }

  turn2(){
    if( this.event && this.event?.time === '8:00 am' ) return 'green bold'
    return ''
  }
  turn3(){
    if( this.event && this.event?.time === '8:00 am' ) return ['green', 'bold']
    return []
  }
  style1(){
    return this.event?.time === '8:00 am'? 'green':'red'
  }
  style2(){
    if( this.event && this.event?.time === '8:00 am' ) 
    return {'color':'greenyellow','font-size': "18px"}
    return {}
  }

  constructor() { }

  handleClick(){
    this.eventClick.emit("foo")
  }

  logOn(){
    console.log("hello world")
  }

  ngOnInit(): void {
  }

}
