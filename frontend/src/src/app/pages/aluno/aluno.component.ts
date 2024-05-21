import { Component } from '@angular/core';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [AlunoFormularioComponent, AlunoListaComponent, MatButtonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss',
})
export class AlunoComponent {}
