import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-data-model';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root',
})

export class AlunoService {
  private url = `${environment.baseUrlApi}`;

  constructor(private httpClient: HttpClient) { }

  create(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(
      this.url + '/criar-aluno',
      aluno
    );
  }

  findAll(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(
      this.url + '/obter-alunos'
    );
  }


  // findAll(): Observable<ResponseModel<Aluno[]>> {
  //   return this.httpClient.get<ResponseModel<Aluno[]>>(
  //     this.url + '/obter-alunos'
  //   );
  // }

  findOne(codAluno: number): any {
    return this.httpClient.get(
      `${this.url}/obter-aluno-por-codigo?${codAluno}`
    );
  }

  update(codAluno: number, aluno: Aluno): Observable<ResponseModel<Aluno>> {
    aluno = aluno as Aluno;
    return this.httpClient.put<ResponseModel<Aluno>>(
      `${this.url}/${codAluno}`,
      aluno
    );
  }

  delete(codAluno: number[]): any {
    return this.httpClient.get(`${this.url}/deletar-aluno?${codAluno}`);
  }
}
