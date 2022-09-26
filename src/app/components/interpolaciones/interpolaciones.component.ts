import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolaciones',
  templateUrl: './interpolaciones.component.html',
  styleUrls: ['./interpolaciones.component.css']
})
export class InterpolacionesComponent implements OnInit {

  constructor() { }
  nombre : string = 'Angela';

  ngOnInit(): void {
  }

}
