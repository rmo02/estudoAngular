import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Funcionario } from 'src/app/Funcionario';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !==a.name);
  }

  removeFuncionario(funcionarios: Funcionario[], funcionario: Funcionario) {
    return funcionarios.filter((a) => funcionario.name !==a.name);
  }
}
