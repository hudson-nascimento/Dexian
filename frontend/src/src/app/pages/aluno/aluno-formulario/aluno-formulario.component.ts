import { AlunoService } from './../../../services/aluno.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Aluno } from '../../../models/aluno';
import { ResponseModel } from '../../../models/response-data-model';

@Component({
  selector: 'app-aluno-formulario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule],
  templateUrl: './aluno-formulario.component.html',
  styleUrl: './aluno-formulario.component.scss',
})
export class AlunoFormularioComponent {
  @Output() onSubmit = new EventEmitter<Aluno>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosAluno: Aluno | null = null;

  alunoForm!: FormGroup;
  //public alunoForm = this.createFormGroup();

  // private defaultBody: Aluno = {
  //   CodAluno: 0,
  //   Nome: '',
  //   Nascimento: undefined,
  //   Cpf: '',
  //   Endereco: '',
  //   Celular: '',
  //   CodEscola: 0,
  // };

  // aluno: Aluno | null = null;
  //alunoObj: Aluno;

  constructor(
    private alunoService: AlunoService,
    // private formBuilder: FormBuilder,
    private router: Router
  ) {
    //this.alunoObj = new Aluno();
  }

  ngOnInit(): void {
    this.alunoForm = new FormGroup({
      codAluno: new FormControl(this.dadosAluno ? this.dadosAluno.CodAluno : 0),
      nome: new FormControl(this.dadosAluno ? this.dadosAluno.Nome : '', [
        Validators.required,
      ]),
      nascimento: new FormControl(
        this.dadosAluno ? this.dadosAluno.Nascimento : '',
        [Validators.required]
      ),
      cpf: new FormControl(this.dadosAluno ? this.dadosAluno.Cpf : '', [
        Validators.required,
      ]),
      endereco: new FormControl(
        this.dadosAluno ? this.dadosAluno.Endereco : '',
        [Validators.required]
      ),
      celular: new FormControl(
        this.dadosAluno ? this.dadosAluno?.Celular : true
      ),
      codEscola: new FormControl(
        this.dadosAluno ? this.dadosAluno?.CodEscola : true
      ),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    });
  }

  submit() {
    console.log(this.alunoForm.value);

    this.onSubmit.emit(this.alunoForm.value);
  }

  // validar dados obrigatorios
  // createFormGroup(): FormGroup {
  //   return this.formBuilder.group({
  //     CodAluno: 0,
  //     Nome: ['', Validators.required],
  //     Nascimento: ['', Validators.required],
  //     Cpf: ['', Validators.required],
  //     Endereco: ['', Validators.required],
  //     Celular: ['', Validators.required],
  //     CodEscola: 0,
  //     nome: new FormControl(this.dadosAluno ? this.dadosAluno.nome : '', [Validators.required]),
  //     name: new FormControl(this.alunoObj?.Nome, [Validators.required]),
  //   });
  // }

  // onSubmit(): void {
  //   this.aluno = Object.assign({}, this.alunoForm.value);

  //   this.alunoService.create(this.aluno).subscribe((response) => {
  //     this.success(response);
  //   }, this.error);
  // }

  // success = (response: ResponseModel<Aluno>): void => {
  //   this.alunoForm.reset(this.defaultBody);
  //   this.router.navigate(['aluno', 'aluno-lista']);
  //   console.log(response.message);
  // };

  // error = (response: HttpErrorResponse): void => {
  //   console.log(response);
  // };
}
