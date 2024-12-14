import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MoviesService } from '../../servicios/moviesservice.service';

@Component({
  selector: 'app-movie-create',
  imports: [RouterLink, FormsModule],
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.scss'
})
export class MovieCreateComponent {
  movie = {
    titulo: '',
    poster: '',
    duracionMins: null,
    genero: '',
    anioEstreno: null,
    sinopsis: ''
  };

  constructor(private movieService:MoviesService, private router:Router){}

  createMovie(): void{
    this.movieService.createMovie(this.movie).subscribe(
      {
        next:(createdMovie) =>{
          console.log('Pelicula Creada Exitosamente!');
          alert('Pelicula Creada Exitosamente!');
        },
        error:(err) =>{
          console.error('Error creando la película:', err);
          alert('Error creando la película.');
        }
      }
    )
  }
}
