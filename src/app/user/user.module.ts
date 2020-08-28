import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './user.profile.component';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
    ],
    imports: [
      //BrowserModule,
      //RouterModule.forRoot(AppRoutes)
      CommonModule,
      RouterModule.forChild(userRoutes),
    ],
    bootstrap: []
  })
  export class UserModule
  {
      
  }