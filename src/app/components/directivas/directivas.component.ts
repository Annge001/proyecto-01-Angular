import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  isShow: boolean = true;
  listNames : string [] = ['Juan','Julia','Javier','Jimena'];

  constructor() {
    this.listNames.push('Angela');
  }

  ngOnInit(): void {
  }

  cambiarVista() {

    if (this.isShow){
      this.isShow = false;
    }else {
      this.isShow = true;
    }
  }
}
