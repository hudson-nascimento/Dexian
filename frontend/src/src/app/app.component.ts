import { Component, AfterViewInit, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AuthenticationService } from './services/authentication.service';
import { AlunoComponent } from "./pages/aluno/aluno.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatMenuModule, AlunoComponent]
})
export class AppComponent implements AfterViewInit, ErrorHandler {
  isLoggedIn!: boolean;

  constructor(public authenticationService: AuthenticationService,) { }

  ngAfterViewInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }

  handleError(error: any): void {
    // Log the error to the console.
    console.error(error);

    // Display a friendly error message to the user.
    alert('An unexpected error occurred. Please try again later.');
  }
}
