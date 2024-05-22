import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Location, CommonModule } from '@angular/common';

import { AlunoService } from './../../../services/aluno.service';

@Component({
  selector: 'app-aluno-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './aluno-formulario.component.html',
  styleUrl: './aluno-formulario.component.scss',
})
export class AlunoFormularioComponent {

  alunoForm: FormGroup
    = new FormGroup({
      nome: new FormControl('Hudson nascimento', [Validators.required]),
      nascimento: new FormControl('2024-05-22T20:44:19.804Z', [Validators.required]),
      cpf: new FormControl('321.654.987-00', [Validators.required]),
      endereco: new FormControl('Rua sem nome, 404', [Validators.required]),
      celular: new FormControl('61 99874-5612', [Validators.required]),
      escola: new FormControl('0'),
    });

  constructor(
    private alunoService: AlunoService,
    public router: Router,
    private location: Location,
  ) { }

  onSubmit(): void {
    if (this.alunoForm.invalid) {
      alert('Verifique as informações inseridas')
      this.alunoForm.reset();
      return;
    } else {
      this.alunoService.create(this.alunoForm.value).subscribe({
        next: (res) => {
          console.log(res);
          //this.location.back();
          this.router.navigate(['/aluno'])
        },
        error: (e) => console.error(e)
      });
    }
  }
}
