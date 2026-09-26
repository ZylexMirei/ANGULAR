import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuevoUsuario, Usuario, ValidarAcceso as ValidarAccesoService } from './service/validar-acceso';

@Component({
  selector: 'app-validar-acceso',
  imports: [FormsModule],
  templateUrl: './validar-acceso.html',
  styleUrl: './validar-acceso.scss',
})
export class ValidarAcceso implements OnInit {
  private readonly service = inject(ValidarAccesoService);
  protected readonly usuarios = signal<Usuario[]>([]);
  protected readonly cargando = signal(true);
  protected readonly error = signal('');
  protected readonly guardando = signal(false);
  protected readonly guardado = signal('');
  protected nuevoUsuario: NuevoUsuario = { nombre: '', email: '' };

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  protected guardar(): void {
    this.error.set('');
    this.guardado.set('');
    this.guardando.set(true);

    this.service.crear(this.nuevoUsuario).subscribe({
      next: () => {
        this.nuevoUsuario = { nombre: '', email: '' };
        this.guardando.set(false);
        this.guardado.set('Usuario agregado correctamente.');
        this.cargarUsuarios();
      },
      error: () => {
        this.guardando.set(false);
        this.error.set('No se pudo guardar el usuario.');
      },
    });
  }

  private cargarUsuarios(): void {
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
