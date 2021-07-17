import { MovieCard } from '../components/MovieCard';

import '../styles/global.scss';

import '../styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieListProps {
  selectedGenreProp: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenreProp, movies }: MovieListProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreProp.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}