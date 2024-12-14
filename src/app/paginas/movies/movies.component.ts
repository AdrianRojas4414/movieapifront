import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../servicios/moviesservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movies: any[] = [];
  constructor(private MoviesService: MoviesService){}

  obtenerPeliculas():void{
    this.MoviesService.getMovies().subscribe(
      data => this.movies = data,
      error => console.log(error),
      () => console.log('Peliculas Obtenidas Exitosamente!')
    )
  }

  eliminarPelicula(id: string): void {
    this.MoviesService.deleteMovie(id).subscribe(
      {
        next: (updateMovie) => {
          console.log('Pelicula Eliminada Exitosamente!');
          alert('Pelicula Eliminada Exitosamente!');
          this.obtenerPeliculas();
        },
        error: (err) => {
          console.error('Error Eliminando Pelicula:', err);
          alert('Error Eliminando Pelicula.');
        }
      }
    );
  }
  

  ngOnInit(): void {
    this.obtenerPeliculas();
  }
}
