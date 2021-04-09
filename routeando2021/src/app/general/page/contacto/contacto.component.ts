import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
colormensaje:string= 'ninguncolor';
  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor(color:string){
this.colormensaje=color;

  }
}
