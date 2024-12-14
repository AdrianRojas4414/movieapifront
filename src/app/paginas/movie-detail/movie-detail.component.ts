import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MoviesService } from '../../servicios/moviesservice.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit{
  movie: any = {};
  private movieId!: string;

  constructor(private route:ActivatedRoute, private moviesService:MoviesService, private router:Router){}

  ngOnInit(): void {
    this.movieId = String(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovieById(this.movieId).subscribe((data) => {
      this.movie = data;
    })
  }

  actualizarPelicula(): void {
    const datosActualizados: any = {};
  
    if (this.movie.titulo) datosActualizados.titulo = this.movie.titulo;
    if (this.movie.poster) datosActualizados.poster = this.movie.poster;
    if (this.movie.duracionMins) datosActualizados.duracionMins = this.movie.duracionMins;
    if (this.movie.genero) datosActualizados.genero = this.movie.genero;
    if (this.movie.anioEstreno) datosActualizados.anioEstreno = this.movie.anioEstreno;
    if (this.movie.sinopsis) datosActualizados.sinopsis = this.movie.sinopsis;
  
    // Enviar la solicitud de actualización
    this.moviesService.updateMovie(this.movieId, datosActualizados).subscribe({
      next: () => {
        alert('Película actualizada exitosamente!');
        console.log('Película actualizada exitosamente!');
        this.router.navigate(['/movies']);
      },
      error: (err) => {
        console.error('Error actualizando la película:', err);
        alert('Error actualizando la película.');
      }
    });
  }

}
