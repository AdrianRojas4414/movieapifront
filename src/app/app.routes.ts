import { Routes } from '@angular/router';
import { MoviesComponent } from './paginas/movies/movies.component';
import { MovieDetailComponent } from './paginas/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './paginas/movie-create/movie-create.component';

export const routes: Routes = [
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:id', component: MovieDetailComponent },
    { path: 'create', component: MovieCreateComponent }
];
