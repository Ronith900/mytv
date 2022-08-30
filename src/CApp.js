import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class CApp extends Component {
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

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
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
      <React.Fragment>
        <NavBar totalValue={this.getTotalValue()} />
        <Counters
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }

  getTotalValue() {
    let total = 0;
    this.state.counters.forEach((counter) => {
      if (counter.value >= 1) {
        total += 1;
      }
    });
    return total;
  }
}

export default CApp;
