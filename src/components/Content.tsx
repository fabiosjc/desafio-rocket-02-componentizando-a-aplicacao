import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App'
import { api } from '../services/api'
import { MovieHeader } from './MovieHeader'
import { MovieList } from './MovieList'

import '../styles/content.scss';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export type ContentProps = {
  selectedGenreId: number,
  selectedGenre: GenreResponseProps,
}

export function Content({
  selectedGenreId,
  selectedGenre,
}: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <MovieHeader title={selectedGenre.title} />
      <MovieList movies={movies} />
    </div>
  )
}