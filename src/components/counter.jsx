import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
  };

  // styles = {
  //     fontSize: 15,
  //     fontWeight: 'bold'
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    // console.log('Increment Clicked', this);
    this.setState({ count: this.state.count + 1 })
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="11111111111" /> */}
        {/* <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul> */}

        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> 
        <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {this.renderTags()}
        {this.state.tags.length === 0 && 'Create a new tag!'}
      </React.Fragment>
    );
  }

    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    }

    formatCount() {
      //return this.state.count==0 ? 'zero' : this.state.count; OR
      const { count } = this.state;
      return count === 0 ? "Zero" : count;
    }
}

export default Counter;
