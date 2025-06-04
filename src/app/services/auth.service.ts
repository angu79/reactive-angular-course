import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthStore{

    user$: Observable<User>;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    login(email: string, password: string): Observable<User> {
        // Implement login logic here
        throw new Error("Method not implemented.");
    }

    logout(){
        // Implement logout logic here
        throw new Error("Method not implemented.");
    }
}