import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {
@Input() colorporinput:string;

@Output() eventoCambioDeColor:EventEmitter <any>= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
cambiarcolortexto(){
this.eventoCambioDeColor.emit("rojo");
}
}
