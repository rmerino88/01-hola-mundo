import { Component } from '@angular/core';
// Esta etiqueta es un decorador, al fin y al cabo es un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // No es necesario definirlo debidoa  que se introduce un string a continuación y lo deduce por sí solo
  // nombre: string = 'Raúl';
  // apellido: string = 'Merino';
  nombre = 'Raúl';
  apellido = 'Merino';
  // status: string;
  status = 'Developer';
}
