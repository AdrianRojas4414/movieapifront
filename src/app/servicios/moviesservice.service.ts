import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://movieapi-6kyg.onrender.com/api/movies';

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener una película por ID
  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva película
  createMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  // Actualizar una película existente
  updateMovie(id: string, movie: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, movie);
  }

  // Eliminar una película
  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
