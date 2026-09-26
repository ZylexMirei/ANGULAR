import { Component } from '@angular/core';
import { ValidarAcceso } from './validar-acceso/validar-acceso';

@Component({
  selector: 'app-root',
  imports: [ValidarAcceso],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
