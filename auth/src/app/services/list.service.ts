import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Funcionario } from 'src/app/Funcionario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !==a.name);
  }

  removeFuncionario(funcionarios: Funcionario[], funcionario: Funcionario) {
    return funcionarios.filter((a) => funcionario.name !==a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
