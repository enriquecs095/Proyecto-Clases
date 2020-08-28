import { Component, Input } from '@angular/core';


@Component({
    selector: 'secciones-list',
    templateUrl: './seccion-list.component.html'

})

export class SeccionListaComponent{

@Input() secciones:Seccion

constructor(){

}

}