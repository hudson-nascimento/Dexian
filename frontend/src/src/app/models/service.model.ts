import { Observable } from "rxjs"
import { ResponseModel } from "./response-data-model"

export interface Service<T> {
    findOne(id: number | string): Observable<ResponseModel<T>>
    findAll(): Observable<ResponseModel<T>>
    create(resource: T): Observable<ResponseModel<T>>
    update(id: number | string, resource: T): Observable<ResponseModel<T>>
    delete(ids: number[] | string[]): Observable<ResponseModel<T>>
  }