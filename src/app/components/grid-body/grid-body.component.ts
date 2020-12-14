import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from '../grid/grid.component';

@Component({
  selector: 'app-grid-body',
  templateUrl: './grid-body.component.html',
  styleUrls: ['./grid-body.component.css']
})
export class GridBodyComponent implements OnInit {
  
  @Input() restaurantes: Restaurante[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
