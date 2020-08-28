import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { Clase } from './clase.model';

@Injectable()
export class ClaseService
{
    getClases(): Observable<Clase[]>
    {
        let subject = new Subject<Clase[]>();
        
        setTimeout(
            ()=> {
                subject.next(listaClase);
                subject.complete();
            }, 500
        )

        return subject;
    }

    getClaseById(id)
    {
        return listaClase.find(clase => clase.id === id);
    }

saveClase(newClase){
    newClase.id=98798
    listaClase.push(newClase);
}

}

const listaClase: Clase[] = [
    {
        id: 1,
        nombre: 'Experiencia de Usuario II',
        horario: '8:00 p.m.',
        ubicacion: {
            aula: '306',
            campus: 'San Pedro Sula'
        }
    },
    {
        id: 2,
        nombre: 'Fisica I',
        horario: null,
        ubicacion: {
            aula: '305',
            campus: 'San Pedro Sula'
        }
    },
    {
        id: 3,
        nombre: 'Fisica II',
        horario: '6:40 p.m.',
        ubicacion: {
            aula: '305',
            campus: 'San Pedro Sula'
        }
    },
    {
        id: 4,
        nombre: 'Progración III',
        horario: '6:40 p.m.',
        ubicacion: {
            aula: '305',
            campus: 'San Pedro Sula'
        }
    }
]