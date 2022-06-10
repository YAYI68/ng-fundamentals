import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyToastrService } from './common/toastr.service';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventRouteActivator } from './event-detail/event-router';
import { EventListResolver } from './shared/event-list-resolver.service';
import { LoginComponent } from './user/login/login.component';
import { AuthService } from './user/profile/user-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './create-event/edit-event.component';
import { EventSessionComponent } from './event-session/event-session.component';
import { SessionListComponent } from './event-session/session-list.component';
import { CollapseSession } from './event-session/colatible-session.component';
import { DurationPipe } from './shared/duration.pipe';
import { simpleModelComponent } from './common/simple-model.component';
import { ModalTriggerDirective } from './common/modal-trigger';
import { JQ_TOKEN } from './common/jquery.service';
import { UpvoteComponent } from './event-session/upvote.component';
import { VoterService } from './event-session/voter.service';
import { LocationValidator } from './shared/location-validator.directives';



declare let jQuery:any;


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    EditEventComponent,
    EventSessionComponent ,
    SessionListComponent,
    CollapseSession,
    DurationPipe, 
    simpleModelComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ EventService,
    MyToastrService,
    EventRouteActivator,
    EventListResolver,
    {provide:JQ_TOKEN,useValue:jQuery },
    {provide:'CanDeactivateCreateEvent',useValue:checkDirtyState},
    AuthService,
    VoterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event,do you really want to cancle?')
  }
  return false;
}
