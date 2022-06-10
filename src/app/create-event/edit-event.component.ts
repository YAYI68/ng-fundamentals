import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IEvent } from "../shared/event";
import { EventService } from "../shared/event.service";


@Component({
    templateUrl: './edit-event.component.html',
})
export class EditEventComponent implements OnInit {
    event!:any;
    constructor(private router:Router,
                private eventService:EventService,
                private activeRoute:ActivatedRoute){
    }

    ngOnInit(){
     const id = this.activeRoute.snapshot.params['id'];
     console.log('my edit id',id)
     // cast the id variable to a number
     this.event = this.eventService.getEvent(+id)
    
            console.log('my edit',this.eventService.getEvent(+id))
   
    }

    updateEvent(formVal:any){
        console.log(formVal)
        this.eventService.updateEvent(formVal)
        this.router.navigate(['/events',this.event.id])
    }
    cancel(){
       this.router.navigate(['/events']) 
    }

}