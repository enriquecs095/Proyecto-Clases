import { Component } from '@angular/core';
import { ClaseService } from 'src/app/shared/clase.service';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'clase-detail',
    templateUrl: "./clase-details.component.html",
    styles:[
        `
        .container{
            padding-left: 20px;
            padding-right: 20px;
        }
        `
    ]
 })

export class ClaseDetailsComponent {
    public clase;
    addMode:boolean=false;
    constructor(private claseService: ClaseService,
        private route:ActivatedRoute) {
    }

    ngOnInit()
    {
        this.clase = this.claseService.getClaseById(
            +this.route.snapshot.params['id']
        );
    }
    
fnAddMode(){
this.addMode=!this.addMode;

}

}