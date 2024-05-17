import { AlunoService } from './../../../_services/aluno.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Aluno } from './../../../_models/aluno';
import { Component } from '@angular/core';

import { ResponseDataModel } from '../../../_models/response-data-model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aluno-formulario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './aluno-formulario.component.html',
  styleUrl: './aluno-formulario.component.scss',
})
export class AlunoFormularioComponent {
  public alunoForm = this.createFormGroup();

  private defaultBody: Aluno = {
    CodAluno: 0,
    Nome: '',
    Nascimento: undefined,
    Cpf: '',
    Endereco: '',
    Celular: '',
    CodEscola: 0,
  };

  aluno: Aluno = new Aluno();
  alunoObj: Aluno;

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private router: Router
  ) {
    this.alunoObj = new Aluno();
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      CodAluno: 0,
      Nome: ['', Validators.required],
      Nascimento: ['', Validators.required],
      Cpf: ['', Validators.required],
      Endereco: ['', Validators.required],
      Celular: ['', Validators.required],
      CodEscola: 0,

      name: new FormControl(this.alunoObj?.Nome, [Validators.required]),
    });
  }

  onSubmit(): void {
    this.aluno = Object.assign({}, this.alunoForm.value);

    this.alunoService.create(this.aluno).subscribe((response) => {
      this.success(response);
    }, this.error);
  }

  success = (response: ResponseDataModel<Aluno>): void => {
    this.alunoForm.reset(this.defaultBody);
    this.router.navigate(['cluster-settings', 'customer']);
    console.log(response.message);
  };

  error = (response: HttpErrorResponse): void => {
    console.log(response);
  };
}
