import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';

import { FormsModule } from '@angular/forms';
import { GridBodyComponent } from './components/grid-body/grid-body.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export class Restaurante{
//   nombre: string;
//   ciudad: string;

//   constructor(nombre: string, ciudad: string) {
//     this.nombre = nombre;
//     this.ciudad = ciudad;
//   }
// }
