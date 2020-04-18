import { Component } from '@angular/core';

@Component({
  // Se recomienda que el selector comience con app-
  selector: 'app-header',
  // template: `<h1>Header component</h1>`
  templateUrl: './header.component.html'
  // Cuando el html es muy largo el tslint escupirá un error (el que se aprecia en la bombilla), debido a que hay un campo mx-lenght-line que fija la longitud máxima en 140 caracteres
})

export class HeaderComponent {
    title = 'header-component';

}