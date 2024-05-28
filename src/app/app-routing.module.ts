import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionParfumComponent } from './gestion-parfum/gestion-parfum.component';
import { AjoutParfumComponent } from './ajout-parfum/ajout-parfum.component';
import { EditParfumComponent } from './edit-parfum/edit-parfum.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:DetailsComponent},
  {path:'liste',component:GestionParfumComponent},
  {path:'ajouter',component:AjoutParfumComponent},
  { path: 'edit-parfum/:id', component: EditParfumComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
