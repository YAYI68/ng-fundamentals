import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent:any;

  isDirty:boolean = true;
  constructor( private router:Router,
    private eventService: EventService) { }

  ngOnInit(): void {
  }
  
  cancel(){   
     this.router.navigate(['/events'])
  }
  saveEvent(formValue:any){
    this.isDirty = false;
    this.eventService.saveEvent(formValue)
    this.router.navigate(['/events'])
  }

}
