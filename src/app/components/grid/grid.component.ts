import { Component, OnInit } from '@angular/core';
//import { Restaurante } from './';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  nombreRest: string;
  ciudadRest: string;
  restaurantes: Restaurante[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregarRestaurante() {
    if (this.nombreRest == '' || this.ciudadRest == '')
    {
      alert('los campos deben estar ingresados');
      return;
    }
    if (this.existeRestaurante()) {
      alert('existe un restaurante en la misma ciudad');
      return;
    }
    this.restaurantes.unshift(new Restaurante(this.nombreRest, this.ciudadRest));
    console.log(this.restaurantes);
    this.nombreRest = '';
    this.ciudadRest = '';
  }

  existeRestaurante() {
    if (this.restaurantes.length <= 0) return false;
    const rest: Restaurante = this.restaurantes.find(rest => rest.nombre.toLowerCase().trim() === this.nombreRest.trim().toLowerCase() 
                                                          && rest.ciudad.toLowerCase().trim() === this.ciudadRest.trim().toLowerCase());
    console.log(rest);
    return rest != undefined
  }

}
export class Restaurante{
  nombre: string;
  ciudad: string;

  constructor(nombre: string, ciudad: string) {
    this.nombre = nombre;
    this.ciudad = ciudad;
  }
}