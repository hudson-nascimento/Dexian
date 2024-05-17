import { Routes } from '@angular/router';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { AlunoFormularioComponent } from './pages/aluno/aluno-formulario/aluno-formulario.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'aluno', component: AlunoComponent },
  { path: 'aluno-formulario', component: AlunoFormularioComponent },
  { path: 'aluno/add', component: AlunoFormularioComponent },
  {
    path: 'edit/:codAluno',
    component: AlunoFormularioComponent,
  },
  {
    path: 'delete/:codAluno',
    component: AlunoFormularioComponent,
  },
];
