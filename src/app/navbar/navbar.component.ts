import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { AuthService } from '../user/profile/user-service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm:string = "";
  foundSessions:any;

  constructor(public auth:AuthService,private eventService:EventService) { }

  ngOnInit(): void {
  }
  SearchSessions(searchTerm: string){
    this.eventService.searchSessions(searchTerm).subscribe(
      ((sessions: any) =>{
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      })
    )

  }

}
