import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
