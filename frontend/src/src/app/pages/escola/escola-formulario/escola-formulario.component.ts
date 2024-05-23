import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-escola-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './escola-formulario.component.html',
  styleUrl: './escola-formulario.component.scss'
})
export class EscolaFormularioComponent {

  escolaForm: FormGroup
    = new FormGroup({
      codEscola: new FormControl('0001', [Validators.required]),
      descricao: new FormControl('Escola', [Validators.required])
    });

  constructor() {

  }

  onSubmit(): void { }
}
