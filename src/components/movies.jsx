import React, { Component } from "react";
import { Link } from "react-router-dom";
class Movies extends Component {
  render() {
    const { length: count } = this.props.movies;
    if (count === 0) return "No movies in the database";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <p>Total movies : {count}</p>
          </div>
          <div className="col">
            <Link
              to="/movie/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
          </div>
        </div>
        <div className="row">
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
              {this.props.movies.map((movie) => (
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
                      onClick={() => this.props.onDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
