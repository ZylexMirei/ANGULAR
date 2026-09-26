import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number | string;
  nombre?: string;
  email?: string;
  [key: string]: unknown;
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
}
