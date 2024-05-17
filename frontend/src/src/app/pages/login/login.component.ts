import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  message: string;

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.message = this.getMessage();
  }

  getMessage() {
    return this.authenticationService.isLoggedIn ? 'logado' : 'deslogado';
  }

  login() {
    this.message = 'Logando...';

    this.authenticationService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authenticationService.isLoggedIn) {
        const redirectUrl = '/aluno';

        // Redireciona o usuario
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.message = this.getMessage();
  }
}
