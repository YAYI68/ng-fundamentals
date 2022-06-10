import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISession } from '../shared/event';
import { AuthService } from '../user/profile/user-service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})

export class SessionListComponent implements  OnChanges {
  @Input() sessions!:any;
  @Input() filterBy!:string;
  @Input() sortBy!:string;
  visibleSessions:any[]=[]

  constructor( private router: Router,
               public auth:AuthService,
               private voterService:VoterService ) { }


 ngOnChanges(){
   if(this.sessions){
     this.filterSessions(this.filterBy);
     console.log(this.visibleSessions)
   }
 }

 

 toggleVote(session:any){
   if(this.userHasVoted(session)){
     this.voterService.deleteVoter(session,this.auth.currentUser.userName)
   }
   else{
     this.voterService.addVoter(session,this.auth.currentUser.userName)
   }
   if(this.sortBy === 'votes'){
     this.visibleSessions.sort(voteSort);
   }

 }

  userHasVoted(session:any){
    return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
  }

 filterSessions(filter:string){
   if(filter==='all'){
     this.visibleSessions = this.sessions.slice(0);
     this.sortBy === 'name'?this.visibleSessions.sort(nameSort):this.visibleSessions.sort(voteSort)
     console.log(filter);
   }
   else{
    console.log(filter);
     this.visibleSessions = this.sessions.filter((session: { level: string; }) =>{
       return session.level.toLowerCase() === filter;
     })
   }
 }

}

function nameSort(s1:any, s2:any) {
 if(s1.name > s2.name)return 1
 else if(s1.name === s2.name)return 0;
 else return -1
}

function voteSort(s1:any, s2:any) {
  return s2.voters.length - s1.voters.length
}

