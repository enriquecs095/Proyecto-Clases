import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
 
@Component({
  templateUrl: './user.profile.component.html',
  styles: [`
  em {float:right; color:#E05C65; padding-left: 10px;}
  .error input, .error select, .error textarea {background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color:#999; }
  .error :ms-input-placeholder { color: #999; }
`]
})
 
export class ProfileComponent 
{
    firstName: FormControl
    lastName:FormControl
    profileForm:FormGroup

    constructor(private authService: AuthService) {

      this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
      this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    }

    ngOnInit()
    {

      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      })
    }

    fnUpdate(formValues){
      console.log(formValues);
      console.log(this.firstName.value);
      console.log(this.lastName.value);
    }

    NoValidateFirstName(){
      return this.firstName.invalid && this.firstName.touched;
    }
}