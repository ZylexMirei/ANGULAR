import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nombre?: string;
  email?: string;
  fechaCreacion?: string;
  fechaModificacion?: string | null;
  creadoPor?: string | null;
  modificadoPor?: string | null;
  eliminado?: boolean;
  rol?: string;
  flag?: boolean | null;
}

export interface NuevoUsuario {
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ValidarAcceso {
  private readonly apiUrl = 'http://localhost:8080/usuarios';

  constructor(private readonly http: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  crear(usuario: NuevoUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}

