import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // props vs state
  //props - include data that we give to a component, is read only
  // state - includes that is data that is local/private to the component
  //Component which owns the data should be the one modifying it
  //Controlled components will doesnt have its own state, and will only recive data from the parent and will raise events
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterid) => {
    const filteredCounter = this.state.counters.filter(
      (c) => c.id !== counterid
    );
    this.setState({ counters: filteredCounter });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className="btn btn-secondary m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
