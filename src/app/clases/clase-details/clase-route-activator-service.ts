import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ClaseService } from 'src/app/shared/clase.service';

@Injectable()
export class ClaseRouteActivator implements CanActivate
{
    constructor(private claseService:ClaseService, 
        private router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot) 
    { 
        let existeClase = !!this.claseService.getClaseById(
            +route.params['id']
        )

        if(!existeClase)
            this.router.navigate(['/clases']);
        
        return true;
    }

}