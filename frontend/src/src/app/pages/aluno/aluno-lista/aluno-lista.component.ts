import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-lista',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatIcon],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.scss',
})
export class AlunoListaComponent {
  displayedColumns: string[] = ['Nome', 'Nascimento', 'Cpf', 'Endereco', 'Celular', 'Acao'];
  dataSource = DATA;

}

const DATA: Aluno[] = [
  { CodAluno: 1, Nome: 'Aluno', Nascimento: new Date(), Cpf: '999.999.999-99', Endereco: 'Rua 1, Brasília', Celular: '(61) 99999-9999' }
];