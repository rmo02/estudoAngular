import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Ramon';
  teste: string = 'isso é um teste';
  idade = '28;'

  constructor() { }

  ngOnInit(): void {
  }

}
