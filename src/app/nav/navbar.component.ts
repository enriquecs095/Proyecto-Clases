import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'clase-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `.navbar-default {
            background-color: #1b3c61;
            color: aliceblue;
        }`,
        `a, button {
            color: #f5f5f5;
            text-decoration: none;
            background-color: transparent;
        }`,
        `
        .list-group-item {
            color: black;
            font-weight: bold;
        }

        li > a.activo{
            color: #42adf5;
        }
        `]
})

export class NavbarComponent {
    constructor(public authService: AuthService) {

    }

}