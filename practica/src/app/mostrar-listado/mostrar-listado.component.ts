import { Component, Input } from '@angular/core';
import { personas } from '../interfaces/interface';


@Component({
  selector: 'app-mostrar-listado',
  templateUrl: './mostrar-listado.component.html',
  styleUrl: './mostrar-listado.component.css'
})
export class MostrarListadoComponent {
  @Input() estudiantes: personas []=[
    {
      nombre:"",
      nota: 0
    }
  ]
}
