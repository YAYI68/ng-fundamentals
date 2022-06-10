import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyToastrService } from '../common/toastr.service';
import { IEvent } from '../shared/event';
import { EventService } from '../shared/event.service';




@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:IEvent[] | undefined;
  
  constructor(private eventService: EventService,
              private toastr: MyToastrService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events =>{
    //   this.events = events
    // })
    this.events = this.route.snapshot.data['events']
  }

  handleEvent(data:string):void {
    console.log(`received: ${data}`)
  }

  handlethumbClick(eventName:string){
    this.toastr.success(eventName)
  }


}


