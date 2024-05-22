import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AlunoService } from './../../../services/aluno.service';
import { Aluno } from '../../../models/aluno';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aluno-formulario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './aluno-formulario.component.html',
  styleUrl: './aluno-formulario.component.scss',
})
export class AlunoFormularioComponent {

  aluno!: Aluno
  alunoForm!: FormGroup;

  constructor(private alunoService: AlunoService, private formBuilder: FormBuilder, private router: Router
  ) {
    this.alunoForm = this.formBuilder.group({
      codAluno: [''],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      celular: ['', Validators.required],
      escola: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      this.alunoService.create(this.alunoForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    }
  }
}
