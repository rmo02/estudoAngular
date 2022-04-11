import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent implements OnInit {
  @Input() name: string = "";
  @Input() userData!: {email: string, role: string}


  constructor() { }

  ngOnInit(): void {
  }

}
