import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared/event';
import { EventService } from '../shared/event.service'; 

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event!:any;
  addMode!:boolean;
  filterBy:string = 'all';
  sortBy:string = 'name';
  
  constructor(private eventService: EventService,
              private route:ActivatedRoute,
              private router:Router ) { }

  ngOnInit(): void {
    console.log(this.route)
    const id = (+this.route.snapshot.params["id"])
    console.log(id)
    this.event = this.eventService.getEvent(id)
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  addSession(){
    this.addMode = true
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map((s:any)=> s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateSession(this.event)
    this.addMode = false;
  }
  cancelAddSession(){
    this.addMode = false;
  }

}
