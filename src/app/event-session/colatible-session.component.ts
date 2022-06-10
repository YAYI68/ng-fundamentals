import { Component, Input } from "@angular/core";


@Component({
    selector: 'collapse',
    template:`
    <div  (click)="toggleCollapsed()" class="well pointable"> 
    <!-- <h4 class="well-title">{{title}}</h4> -->
    <h4 class="well-title">
        <ng-content select="[collapse-title]"></ng-content>
    </h4>
      <ng-content select="[collapse-body]" *ngIf="visible"></ng-content>  
    </div>
        `

})
export class CollapseSession{
    @Input() title!:string;
    visible:boolean=true;

    toggleCollapsed(){
        this.visible=!this.visible;
    }

}