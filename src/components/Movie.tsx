import React from 'react';
import { IMovie } from './App';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://kozhapereplet.ru/wp-content/uploads/2017/05/no_photo.png";

interface IProps {
  movie: IMovie
}



const Movie = ({ movie }: IProps) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img src={poster} alt={`The movie titled: ${movie.Title}`} />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
}

export default Movie;