import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-aluno-lista',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatIcon],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.scss',

})
export class AlunoListaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'nascimento', 'cpf', 'endereco', 'celular', 'acao'];
  dataSource!: Aluno[];

  constructor(private alunoService: AlunoService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // Preenche a lista de alunos   
    this.alunoService.findAll()
      .subscribe({
        next: (data: Aluno[]) => {
          this.dataSource = data;
        }, error: (err) => console.log(err)
      });
  }
}

