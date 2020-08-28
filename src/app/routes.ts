import { Routes } from '@angular/router';
import { ClasesListComponent } from './clases/clases-list.component';
import { ClaseDetailsComponent } from './clases/clase-details/clase-details.component';
import { CreateClaseComponent } from './clases/create-clase.component';
import { ClaseRouteActivator } from './clases/clase-details/clase-route-activator-service';
import { ClasesListResolver } from './clases/clases-list-resolver.service';


export const AppRoutes: Routes = [
    { path: 'clases', component: ClasesListComponent, resolve: { clases: ClasesListResolver} },
    { path: '', redirectTo: '/clases', pathMatch: 'full' },
    { path: 'clases/new', component: CreateClaseComponent , canDeactivate: ['canDeactivateCreateClase']},
    { path: 'clases/:id', component: ClaseDetailsComponent, canActivate: [ClaseRouteActivator] },
    { path: 'user', loadChildren: () => import('./user/user.module').then(c=> c.UserModule) },
]



//http://localhost:4200/clases