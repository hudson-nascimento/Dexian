import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatTextColumn } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno-lista',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatIcon, MatTextColumn, MatCheckboxModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.scss',

})
export class AlunoListaComponent implements OnInit {
  displayedColumns: string[] = ['codAluno', 'nome', 'nascimento', 'cpf', 'endereco', 'celular', 'actions'];
  dataSource = new MatTableDataSource<Aluno>();
  dataCount: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    // Preenche a lista de alunos   
    this.alunoService.findAll()
      .subscribe({
        next: (data: Aluno[]) => {
          this.dataSource.data = data;
        }, error: (err) => console.log(err)
      });
  }

  // teste
  selection = new SelectionModel<Aluno>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Aluno): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.codAluno}`;
  }
}

