import React, { Component } from "react";

class Counter extends Component {
  // State is a special prop in react, which basically is an object which contains data the component needs
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  //Event handling,  a function/object reference will be passed to the button which is calling
  // we can use arrow function instead of bind, in this case it will refere to the current object, which is Counter
  //After the setSate function is called, react in sometime will call the render method and update the count value.
  // When passing argument to a function we can use inline onClick= {() => this.handleIncrement(product)}
  handleIncrement = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    //JSX expression which eventually gets compiled to call React.createElement, thats why we need to import react class at the top.
    //JSX expression should have one parent element, when there are two elements in the same line babel doesnt know which element to pass, so we need to enclose it in a div
    //To avoid extra div, we can use React.Fragment
    // Embedding expressions -> {} an expression is something which produces value, we can write JS expression inside html snippets
    return (
      <div className="m-2">
        <span className={this.renderBadgeColor()}>{this.formatCount()}</span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  renderBadgeColor() {
    let badge = "badge m-2 bg-";
    badge += this.state.value === 0 ? "warning" : "primary";
    return badge;
  }
}

export default Counter;
