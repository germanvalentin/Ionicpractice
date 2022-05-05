import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gasto} from '../interfaces/gastos.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnotadorService {

  constructor(private http: HttpClient) { }
    getAllGasto():Observable<Gasto[]> {
   return this.http.get<Gasto[]>('https://626875003f45bffa838c4d5f.mockapi.io/Controlgastos');
    }
    addGasto(gastos:Gasto):Observable<Gasto>{
      return this.http.post<Gasto>('https://626875003f45bffa838c4d5f.mockapi.io/Controlgastos', gastos);
    }
  }
