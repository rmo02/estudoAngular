import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Bob", type: "Cat"},
    {name: "Alfa", type: "Cat"},
    {name: "Banze", type: " Dog"},
    {name: "Beta", type: "Horse"},
  ]

  funcionarios = [
    {name: "AAA", salario: "$2000"},
    {name: "BBB", salario: "$1000"},
    {name: "CCCC", salario: "$30000"},
    {name: "DDDD", salario: "$50000"},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
