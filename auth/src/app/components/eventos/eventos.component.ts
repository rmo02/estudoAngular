import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  showPic: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage (): void {
    this.show = !this.show; // ou this.show = true;

  }

  showMessage1 (): void {
    this.show1 = !this.show1; // ou this.show = true;

  }

  showMessage2 (): void {
    this.show2 = !this.show2; // ou this.show = true;

  }

  showPic1 (): void {
    this.showPic = !this.showPic;
  }
}
