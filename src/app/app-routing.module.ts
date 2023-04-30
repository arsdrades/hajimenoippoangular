import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/personajes.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'historia', component: HistoriaComponent }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

