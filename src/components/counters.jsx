import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // props vs state
  //props - include data that we give to a component, is read only
  // state - includes  data that is local/private to the component
  //Component which owns the data should be the one modifying it
  //Controlled components will doesnt have its own state, and will only recive data from the parent and will raise events
  render() {
    return (
      <div>
        <button className="btn btn-secondary m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
