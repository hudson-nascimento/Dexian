import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseDataModel } from '../_models/response-data-model';
import { Aluno } from '../_models/aluno';
import { Service } from '../_models/service.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService implements Service<Aluno> {
  private url = `${environment.urlAPI}/customer`;

  constructor(private httpClient: HttpClient) {}

  create(aluno: Aluno): Observable<ResponseDataModel<Aluno>> {
    aluno = aluno as Aluno;
    return this.httpClient.post<ResponseDataModel<Aluno>>(
      this.url + '/criar-alunos',
      aluno
    );
  }

  findAll(): any {
    return this.httpClient.get(this.url + '/obter-alunos');
  }

  findOne(codAluno: number): any {
    return this.httpClient.get(
      `${this.url}/obter-aluno-por-codigo?${codAluno}`
    );
  }
  update(codAluno: number, aluno: Aluno): Observable<ResponseDataModel<Aluno>> {
    aluno = aluno as Aluno;
    return this.httpClient.put<ResponseDataModel<Aluno>>(
      `${this.url}/${codAluno}`,
      aluno
    );
  }

  delete(codAluno: number[]): any {
    return this.httpClient.get(`${this.url}/deletar-aluno?${codAluno}`);
  }
}
