import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
      console.log('Counters - Rendered');
      const { onReset, counters, onDecrement, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
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
