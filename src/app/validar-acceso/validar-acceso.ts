import { Component, OnInit, inject, signal } from '@angular/core';
import { Usuario, ValidarAcceso as ValidarAccesoService } from './service/validar-acceso';

@Component({
  selector: 'app-validar-acceso',
  imports: [],
  templateUrl: './validar-acceso.html',
  styleUrl: './validar-acceso.scss',
})
export class ValidarAcceso implements OnInit {
  private readonly service = inject(ValidarAccesoService);
  protected readonly usuarios = signal<Usuario[]>([]);
  protected readonly cargando = signal(true);
  protected readonly error = signal('');

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (usuarios) => {
        this.usuarios.set(usuarios);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo conectar con el backend.');
        this.cargando.set(false);
      },
    });
  }
}
