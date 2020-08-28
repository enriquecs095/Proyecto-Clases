import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ClaseService } from '../shared/clase.service';
import { Router } from '@angular/router';

@Component({
    selector: 'create-clase',
    templateUrl: './create-clase.component.html',

                        styles: [

                            
                        ]
})

 export class CreateClaseComponent
 {
    
    isDirty:boolean = true;
    
    newClase:any;


    constructor(private claseService: ClaseService,private router: Router){
    this.newClase={
        nombre: 'UX',
        horario: '6:40 pm',
        ubicacion:{
            aula: 'Virtual',
            campus: 'SPS'
        },
    imagenURL: '/assets/images/basic-shield.png'
    }

    }

    saveClase(FormValues){
        this.claseService.saveClase(FormValues);
        this.router.navigate(['/clases']);
    
    }

    cancel(){


    }


 }