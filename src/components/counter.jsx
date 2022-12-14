import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class Counter extends Component {
  // State is a special prop in react, which basically is an object which holds data the component needs

  //Event handling,  a function/object reference will be passed to the button which is calling
  // we can use arrow function instead of bind, in this case it will refere to the current object, which is Counter
  //After the setSate function is called, react in sometime will call the render method and update the count value.
  // When passing argument to a function we can use inline onClick= {() => this.handleIncrement(product)}
  // handleIncrement = () => {
  //   const { value } = this.state;
  //   this.setState({ value: value + 1 });
  // };

  render() {
    //JSX expression which eventually gets compiled to call React.createElement, thats why we need to import react class at the top.
    //JSX expression should have one parent element, when there are two elements in the same line babel doesnt know which element to pass, so we need to enclose it in a div
    //To avoid extra div, we can use React.Fragment
    // Embedding expressions -> {} an expression is something which produces value, we can write JS expression inside html snippets
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.renderBadgeColor()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  isDisabled() {}

  renderBadgeColor() {
    let badge = "badge m-2 bg-";
    badge += this.props.counter.value === 0 ? "warning" : "primary";
    return badge;
  }
}

export default Counter;
