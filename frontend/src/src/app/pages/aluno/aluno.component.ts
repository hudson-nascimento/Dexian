import { Component } from '@angular/core';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [AlunoFormularioComponent, AlunoListaComponent],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss',
})
export class AlunoComponent {}
