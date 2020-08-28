import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',

    styles: ['em { float:right; color:#ff8080    ; padding-left:10px; }']
}) 

export class LoginComponent
{
    userName
    password
    
    constructor(private AuthService: AuthService, private router: Router)
    {

    }

    fnLogin(form){
        console.log(form.userName)
        console.log(form.password)
        this.AuthService.loginUser(form.userName, form.password);
        this.router.navigate(['/clases'])
    }
}