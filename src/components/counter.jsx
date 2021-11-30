import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* Increment */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        {/* Decrement */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          -
        </button>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //return this.state.count==0 ? 'zero' : this.state.count; OR
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
