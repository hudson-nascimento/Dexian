import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs'
import { Location, CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from '../../services/authentication.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-aluno',
  standalone: true,
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
    MatMenuModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss',
})
export class AlunoComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  animal!: string;
  name!: string;
  isLoggedIn!: boolean;

  constructor(
    private location: Location,
    public router: Router,
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }

  addData() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  goback(): void {
    this.location.back();
  }

  logout() {
    // this.isLoggedIn = false;
    this.authenticationService.logout();

    const redirectUrl = '/login';
    this.router.navigateByUrl(redirectUrl);
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

