import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClaseService } from '../shared/clase.service';
import { map } from 'rxjs/operators'


@Injectable()
export class ClasesListResolver implements Resolve<any>
{
    /**
     *
     */
    constructor(private claseService: ClaseService) {
        
        
    }

    resolve() {
      //  return this.claseService.getClases().pipe(map(clases=>clases));
      return this.claseService.getClases()
    }

}