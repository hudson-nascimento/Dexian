import { Component, OnInit } from '@angular/core';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule, } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs'
import { Location, CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { EscolaFormularioComponent } from "../escola/escola-formulario/escola-formulario.component";
import { EscolaListaComponent } from "../escola/escola-lista/escola-lista.component";

@Component({
    selector: 'app-aluno',
    standalone: true,
    templateUrl: './aluno.component.html',
    styleUrl: './aluno.component.scss',
    imports: [
        CommonModule,
        AlunoFormularioComponent,
        AlunoListaComponent,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatDialogModule,
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        EscolaFormularioComponent,
        EscolaListaComponent
    ]
})
export class AlunoComponent implements OnInit {

  isLoggedIn!: boolean;

  constructor(
    private location: Location,
    public router: Router,
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }

  // Adiciona aluno
  addData() {
    // this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(AlunoFormularioComponent, {
      width: '100%',
    });
  }

  goback(): void {
    this.location.back();
  }

  logout() {
    this.authenticationService.logout();
    this.isLoggedIn = this.authenticationService.isLoggedIn;
    console.log('Response Login', this.isLoggedIn);
    this.goback();
  }
}