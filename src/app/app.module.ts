import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClaseDetailsComponent } from './clases/clase-details/clase-details.component'
import { AppComponent } from './app.component';
import { ClasesListComponent } from './clases/clases-list.component';
import { ClaseThumbnailComponent } from './clases/clases-thumbnail.component';
import { CreateClaseComponent } from './clases/create-clase.component';
import { NavbarComponent } from './nav/navbar.component';
import { KanbanClaseComponent } from './extra/kanban.component';
import { ClaseService } from './shared/clase.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { ClaseRouteActivator } from './clases/clase-details/clase-route-activator-service';
import { ClasesListResolver } from './clases/clases-list-resolver.service';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SeccionListaComponent } from './clases/clase-details/seccion-list.component';
import { CreateSecccionComponent } from './clases/clase-details/create-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesListComponent,
    ClaseThumbnailComponent,
    NavbarComponent,
    KanbanClaseComponent,
    ClaseDetailsComponent,
    CreateClaseComponent,
    SeccionListaComponent,
    CreateSecccionComponent
  ],
  providers: [
    ClaseService,
    ClaseRouteActivator,
    { provide: 'canDeactivateCreateClase', useValue: checkForm},
    ClasesListResolver,
    AuthService
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function checkForm(component: CreateClaseComponent)
{
  if(component.isDirty)
    return window.confirm('Los datos no han sido salvados, quiere seguir?');

  return true;
}