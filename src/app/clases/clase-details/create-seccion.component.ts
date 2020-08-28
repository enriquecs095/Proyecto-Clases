import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Seccion } from 'src/app/shared/clase.model';


@Component({
    selector: 'create-seccion',
    templateUrl: './create-seccion.component.html'

})

export class CreateSecccionComponent{

nombre:FormControl
profesor: FormControl
horario:FormControl
descripcion:FormControl

seccionForm:FormGroup
seccion:Seccion

constructor(){

}

private palabrasNoValidas(control:FormControl): {[key:string]:any}{

return control.value.includes('fisica') ? {'palabraNoValida':'fisica'}:null
}

ngOnInit(){
    this.nombre=new FormControl('',[Validators.required]);
    this.profesor=new FormControl('',[Validators.required]);
    this.horario=new FormControl('',[Validators.required]);
    this.descripcion=new FormControl('',[Validators.required,Validators.maxLength(10)]);
   
    this.seccionForm=new FormGroup({
        nombre: this.nombre,
        profesor:this.profesor,
        horario:this.horario,
        descripcion:this.descripcion
    })
}
fnCancelar(){

}

fnSave(formValues){
    this.seccion = {
        descripcion: formValues.descripcion,
        id:0,
        nombre: formValues.nombre,
        profesor: formValues.profesor
    }
    
}

}