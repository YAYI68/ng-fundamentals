import { Routes } from "@angular/router"
import { CreateEventComponent } from "./create-event/create-event.component"
import { EventDetailComponent } from "./event-detail/event-detail.component"
import { EventListComponent } from "./event-list/event-list.component"
import { Error404Component } from "./error/error.component"
import { EventRouteActivator } from "./event-detail/event-router"
import { EventListResolver } from "./shared/event-list-resolver.service"
import { EditEventComponent } from "./create-event/edit-event.component"
import { EventSessionComponent } from "./event-session/event-session.component"

export const appRoutes:Routes = [
    {path:'events/new',component:CreateEventComponent,canDeactivate:['CanDeactivateCreateEvent']},
    {path:'events/edit/:id',component:EditEventComponent},
    {path: '',redirectTo:"/events",pathMatch: "full"},
    {path: 'events',component:EventListComponent,resolve:{
        events:EventListResolver
     }},
     {path:'events/session/new',component:EventSessionComponent},
    {path: 'events/:id', component:EventDetailComponent,canActivate:[ EventRouteActivator]},
    { path: '404', component: Error404Component },
    // {path:'user',  loadChildren: "./user/profile/profile.module#ProfileModule"},
    {path:'user',  
    loadChildren: ()=> import("./user/profile/profile.module") 
                    .then(m => m.ProfileModule)
  }

]