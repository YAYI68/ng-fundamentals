import { OnInit,Directive,ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";




@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private el:HTMLElement;
  constructor( @Inject(JQ_TOKEN) private $:any,
                ref:ElementRef){
      this.el = ref.nativeElement;
  }

    ngOnInit(){
        this.el.addEventListener('click',e=>{
            console.log(this.$('#simple-modal')); 
            (this.$('#simple-modal') as any).modal({})     
        })
    }
    
}



