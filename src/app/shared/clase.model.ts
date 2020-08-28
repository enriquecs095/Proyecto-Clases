export class Clase
{
    id: number
    nombre: string
    horario: string
    ubicacion: Ubicacion
    secciones?: Seccion[]
}

export class Ubicacion
{
    aula:string
    campus: string
}

export class Seccion
{
    id: number
    nombre: string
    profesor: string
    descripcion: string
}