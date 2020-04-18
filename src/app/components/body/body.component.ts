import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  title = 'body-component';

  frase: any = {
    mensaje: 'Un gran poder exige una gran responsabilidad.',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman', 'Octopus', 'Venom'];

  show = true;
  changeShowValue() {
    console.log( 'Ha entrado al método!!' );
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}
