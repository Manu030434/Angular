import { Component, EventEmitter, Output } from '@angular/core';
import { personas } from '../interfaces/interface';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrl: './agregar-estudiante.component.css'
})
export class AgregarEstudianteComponent {
  @Output() "agregarEstudiante"= new EventEmitter<string>();

  estudiantes: personas[]=[
    {
      nombre: "",
      nota:0
    }

 ]

}

