import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'clase-thumbnail',
    template: `
        <div class="well hoverwell" [routerLink]="['/clases', clase.id]">
            <h2>{{clase?.nombre}}</h2>
            <div>Horario: {{clase?.horario}}</div>
            <div [ngSwitch]="clase?.horario">
                <span *ngSwitchCase="'6:40 p.m.'">(Inicio Temprano)</span>
                <span *ngSwitchCase="'8:00 p.m.'">(Inicio Tarde)</span>
                <span *ngSwitchDefault>(Inicio No definido)</span>
            </div>
            <div>
                <span [hidden]="!clase?.ubicacion?.campus">Ubicación: {{clase?.ubicacion?.campus}}</span>
                <span class="pad-left"></span>
                <span *ngIf="clase?.ubicacion?.aula">Aula: {{clase?.ubicacion?.aula}}</span>
                <span class="pad-left"></span>
                <span [class.green]="clase?.ubicacion?.aula === '306'">Aula 2: {{clase?.ubicacion?.aula}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left
        {
            margin-left: 20px;
        }
        .green
        {
            color: green;
        }
        .red
        {
            color: red;
        }
    `]
})

export class ClaseThumbnailComponent
{
    @Output() eventClase = new EventEmitter();
    @Input() clase:any;
    
    /*
    clickMe(){
        this.eventClase.emit(this.clase.nombre);
        //console.log('click en el boton')
    }

    InnerConsoleLog(){
        console.log('Llamado desde el componente padre!');
    }*/
}