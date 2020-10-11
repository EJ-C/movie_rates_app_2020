import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Movie.component.scss';



function Movie({ title, rating, genres, summary, poster }) {
  return (
    <div className="movie">
      <Link
       to={{
          pathname: '/movie-detail',
          state: { title, summary, rating, poster, genres },
      }}
      >
      <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            {title}
          </h3>
          <p className="movie__rating">Raiting: {rating} / 10</p>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>;
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = { 
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;