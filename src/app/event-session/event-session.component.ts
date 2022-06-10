import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event';

@Component({
  selector: 'event-session',
  templateUrl: './event-session.component.html',
  styleUrls: ['./event-session.component.css']
})
export class EventSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  sessionForm!: FormGroup

    name= new  FormControl("",Validators.required)
    presenter= new FormControl("",Validators.required)
    duration= new FormControl("",Validators.required)
    level =  new FormControl("",Validators.required)
    abstract= new FormControl("",[Validators.required,Validators.maxLength(400),this.restrictedWords(['foo','bar'])])

  constructor() { }

  ngOnInit(): void {
    this.sessionForm = new FormGroup({
      name: this.name,
      presenter:this.presenter,
      duration: this.duration,
      abstract: this.abstract,
      level: this.level
    })
  }
  saveSession(formVal:any){
    let session={
        id: undefined,
        name: formVal.name,
        presenter:formVal.presenter,
        duration: formVal.duration,
        level: formVal.level,
        abstract:formVal.abstract,
        voters:[]
    }
    this.saveNewSession.emit(session)
    console.log(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }


  private restrictedWords(words: any[]){ 
    return (control: FormControl):{[key:string]:any} | null => {
      if(!words) return null;
      let invalidWords = words.map((word: any) => control.value.includes(word) ? word :null)
                        .filter(word => word !=null)
      return  invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(',')} : null;
      // return control.value.includes('foo')?{'restrictedWords':'foo'} : null;
  
    }
   } 

}
