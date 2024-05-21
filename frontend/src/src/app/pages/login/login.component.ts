import { delay } from 'rxjs';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

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

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) { }

  login() {


    this.openSnackBar('Usuário logado', 'Ok');
    const redirectUrl = '/aluno';
    this.router.navigate([redirectUrl]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action).afterOpened;
  }
}
