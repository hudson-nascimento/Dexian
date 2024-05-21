import { merge } from 'rxjs';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage!: string;

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    this.authenticationService.isLoggedIn = false;
  }

  login() {
    this.authenticationService.login()
      .subscribe(r => r);
      
    console.log('Olha: ', this.authenticationService.isLoggedIn);

    if (this.authenticationService.isLoggedIn) {
      this.openSnackBar('Você entrou!', 'Continuar')
      const redirectUrl = '/aluno';
      this.router.navigate([redirectUrl]);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action).afterOpened;
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Você deve inserir um e-mail';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Não é um e-mail válido';
    } else {
      this.errorMessage = '';
    }
  };
}

