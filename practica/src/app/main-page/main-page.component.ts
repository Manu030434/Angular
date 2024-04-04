import { Component } from '@angular/core';
import { personas } from '../interfaces/interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public estudiantes: personas []=[

  {
    nombre: "mario",
    nota: 4.2
  },

  {
    nombre:"manu",
    nota: 5.0
  }

]

agregarEstudiante(estudiante:personas){
this.estudiantes.push(estudiante)
}
}
