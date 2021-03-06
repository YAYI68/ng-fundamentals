import { Injectable } from '@angular/core';
import { IUser } from './user';
@Injectable()
export class  AuthService{
    currentUser!:IUser;

    loginUser(userName:string,password:string){
        this.currentUser = {
            id:1,
            userName:userName,
            firstName:"yayi",
            lastName:"abiodun"
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    
    updateProfile(firstName:string,lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    
}