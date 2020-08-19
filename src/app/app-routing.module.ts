import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component'; 
import { PerfilComponent } from './perfil/perfil.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashBoard', pathMatch: 'full'},
  { path: 'professores', component: ProfessoresComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'dashBoard', component: DashBoardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
