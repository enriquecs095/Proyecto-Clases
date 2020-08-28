import { Component, OnInit } from "@angular/core";
import { ClaseService } from '../shared/clase.service';
import { ActivatedRoute, NavigationStart, NavigationEnd, Router, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { Clase } from '../shared/clase.model';

declare let toastr;

@Component({
    selector: 'clases-lista',
    template: `
    <div>
        <h1>Listado de Clases</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let claseObject of listaClase" class="col-md-6">
                <clase-thumbnail [clase]="claseObject"></clase-thumbnail>
            </div>
        </div>
    </div>
    `
})
//npm install toastr
export class ClasesListComponent 
{   
    listaClase: Clase[]

    constructor(private claseService: ClaseService, private route: ActivatedRoute, private router: Router)
    {
    }

    ngOnInit()
    {

        this.listaClase = this.route.snapshot.data['clases'];//muestra la informacion de un solo

        /*
        this.claseService.getClases().subscribe(
            clases => {
                this.listaClase = clases 
            }
        );
        */

    }
    
    toastrClick(){
        toastr.success('Hola');
    }
}