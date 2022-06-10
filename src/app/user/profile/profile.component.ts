import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { MyToastrService } from 'src/app/common/toastr.service';
import { AuthService } from './user-service';


@Component({
  templateUrl:"./profile.component.html",
  styles:[`
    em{ float:right; color:#e05c65; padding-left:10px}
    .error input{ background-color:#e3c3c5;}
    .error::-webkit-input-placeholder{color:#999}
    .error::-moz-placeholder{color:#999}
    .error:-ms-input-placeholder{color:#999}
    .error:-moz-placeholder{color:#999}
    
    `]
})
export class ProfileComponent implements OnInit {
  
  public profileGroup!: FormGroup;
  private firstName!:FormControl;
  private lastName!: FormControl;

  constructor(private router:Router,
              private auth:AuthService,
              private toastr:MyToastrService
              ) {}
       
       backEvent(){
          this.router.navigate(['/events'])
       }
       ngOnInit(){
         this.firstName = new FormControl(this.auth.currentUser?.firstName,[Validators.required,Validators.pattern("[a-zA-Z].*")]);
         this.lastName = new FormControl(this.auth.currentUser?.lastName,[Validators.required]);
        this.profileGroup = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
        })

       }
       ValidateFirstName(){
         return this.firstName.invalid && this.firstName.touched
       }
       ValidatelastName(){
        return this.lastName.invalid && this.lastName.touched
      }

       saveProfile(formval:any){
         this.auth.updateProfile(formval.firstName, formval.lastName)
         this.router.navigate(['/events'])
         this.toastr.success("Profile Saved Successfully")
       }

}
