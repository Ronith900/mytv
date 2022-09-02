import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const filteredMovies = this.state.movies.filter(
      (mov) => mov._id !== movie._id
    );
    this.setState({ movies: filteredMovies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return "No movies in the database";
    return (
      <React.Fragment>
        <p>Total movies : {count}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genere</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
