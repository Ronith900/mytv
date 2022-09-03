import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import MNavBar from "./components/mNavBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MNavBar />
        <main className="container mt-5">
          <Switch>
            <Route path="/movie/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
