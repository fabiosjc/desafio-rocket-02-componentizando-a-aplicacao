import { MovieProps } from "./Content"
import { MovieCard } from "./MovieCard"

import '../styles/movie-list.scss'

type MovieListProps = {
  movies: MovieProps[]
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  )
}
