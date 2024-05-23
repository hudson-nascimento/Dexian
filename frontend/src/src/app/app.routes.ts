import { Routes } from '@angular/router';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'aluno', component: AlunoComponent },
  { path: 'login', component: LoginComponent },

];
