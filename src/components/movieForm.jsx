import React, { Component } from "react";

class MovieForm extends Component {
  state = {};

  saveMovie = () => {
    this.props.history.replace("/");
  };
  render() {
    return (
      <div>
        <h2>Movie Id - {this.props.match.params.id}</h2>
        <button className="btn btn-primary" onClick={this.saveMovie}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
