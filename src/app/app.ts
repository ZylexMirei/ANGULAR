import { Component } from '@angular/core';
import { ValidarAcceso } from './validar-acceso/validar-acceso';

@Component({
  selector: 'app-root',
  imports: [ValidarAcceso],
  template: '<app-validar-acceso />',
  styleUrl: './app.scss',
})
export class App {}
