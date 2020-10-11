import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie.component';
import './Home.scss';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=date_added&minimum_rating=6&limit=50');
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    //Loading movie datas!
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading....</span>
          </div>
        ) : ( 
          <div className="movies">
            {movies.map(movie => ( 
              <Movie
                key={movie.id} 
                id={movie.id}
                year={movie.year}
                title={movie.title_long}
                rating={movie.rating}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div> 
        )}
      </section>
    );
  }
}

export default Home;