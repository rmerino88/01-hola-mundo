import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
  // Estos estilos, los indicados aquí solo se aplican para este componente
  // styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
