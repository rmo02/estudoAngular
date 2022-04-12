import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
import { Funcionario } from 'src/app/Funcionario';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  funcionarios: Funcionario[] = [
    {name: "AAA", salario: "$2000"},
    {name: "BBB", salario: "$1000"},
    {name: "CCCC", salario: "$30000"},
    {name: "DDDD", salario: "$50000"},

  ]


  animalDetails = ''

  funcionarioDetais = ''

  showAge (animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  showSalario (funcionario: Funcionario) {
    this.funcionarioDetais = `O Funcionário ${funcionario.name} tem ${funcionario.salario}`
  }

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals,animal);
  }

  removeFuncionario(funcionario: Funcionario) {
    console.log("Removendo funcionário");
  }


  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));  //animals do subscribe pode ser trocado por qualquer outra variável
  }

}
