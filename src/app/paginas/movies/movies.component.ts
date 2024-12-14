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
      () => console.log('FIN')
    )
  }

  eliminarPelicula(id: number): void {
    this.MoviesService.deleteMovie(id.toString()).subscribe( // Convertir el id a string
      {
        next: (updateMovie) => {
          console.log('Producto Eliminado Exitosamente:', updateMovie);
          alert('Producto Eliminado Exitosamente!\n' + JSON.stringify(updateMovie, null, 2));
        },
        error: (err) => {
          console.error('Error Eliminando Producto:', err);
          alert('Error Eliminando Producto.');
        }
      }
    );
  }
  

  ngOnInit(): void {
    this.obtenerPeliculas();
  }
}
