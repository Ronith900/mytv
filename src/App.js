import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import MNavBar from "./components/mNavBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { getMovies } from "./services/fakeMovieService";
import MovieForm from "./components/newMovie";

class App extends Component {
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
    return (
      <React.Fragment>
        <MNavBar />
        <main className="container mt-5">
          <Switch>
            <Route path="/movie/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/movies"
              component={(props) => (
                <Movies
                  movies={this.state.movies}
                  {...props}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
