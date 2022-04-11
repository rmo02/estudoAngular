import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Bob", type: "Cat", age: 4},
    {name: "Alfa", type: "Cat", age: 5},
    {name: "Banze", type: " Dog", age: 11},
    {name: "Beta", type: "Horse", age: 7},
  ]

  funcionarios = [
    {name: "AAA", salario: "$2000"},
    {name: "BBB", salario: "$1000"},
    {name: "CCCC", salario: "$30000"},
    {name: "DDDD", salario: "$50000"},

  ]


  animalDetails = ''

  showAge (animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
