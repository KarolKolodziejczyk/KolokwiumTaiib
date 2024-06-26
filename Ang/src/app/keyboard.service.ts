import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Klawiatura } from './keyboard.interface';
import { KlawiaturaDTO } from './keyboard-dto.interface';



@Injectable({
  providedIn: 'root'
})
export class KeyboardService {


  constructor(private http: HttpClient) { }

  getKeyboards(): Observable<Klawiatura[]> {
    return this.http.get<Klawiatura[]>('http://localhost:5263/api/Klawiatura')
      .pipe(
        tap(data => console.log('Response from getKeyboards:', data))
      );  }

  addKeyboard(keyboard: KlawiaturaDTO): Observable<Klawiatura> {
    return this.http.post<Klawiatura>(`http://localhost:5263/api/Klawiatura`, keyboard);
  }

  deleteKeyboard(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:5263/api/Klawiatura/${id}`);
  }
}
