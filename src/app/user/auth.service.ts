//AuthService
//loginUser
//estaAutenticado
//User nombre de clase
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    currentUser: User
    
    loginUser(userName: string, password: string){
        this.currentUser= {
            firstName: 'Johnnie',
            lastName: 'Miralda',
            userName: userName,
            id: 1
        }
    }

    estaAutenticado(){
        return !!this.currentUser
    }
}
export class User{
    id: number
    firstName: string
    lastName: string
    userName: string
}

