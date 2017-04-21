import {Injectable} from  '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService 
{
   currentUser:IUser
    loginUser(userValues:any)
    {
        this.currentUser={
            id:1,
            userName:userValues.userName,
            password:userValues.password
        };
    }

    isAuthenticated()
    {
        return !!this.currentUser;
    }
    


}