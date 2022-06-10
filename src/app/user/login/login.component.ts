import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../profile/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string | undefined;
  passWord:string | undefined;
  mouseoverlogin:boolean | undefined;

  constructor(private authService:AuthService,
              private router:Router) {
    
   }

   login(formval:any){
     console.log(formval)
     this.authService.loginUser(formval.userName,formval.passWord)
     this.router.navigate(['/events']);

   }
   cancel(){
     this.router.navigate(['/events']);
   }

  ngOnInit(): void {

   
  }

}
