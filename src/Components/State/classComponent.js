import React from "react";

class MyStateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div
        style={{
          padding: "100px",
        }}
      >
        {this.state.count}

        <div>
          <button onClick={this.increment}>increment</button>
        </div>
      </div>
    );
  }
}

export default MyStateComponent;
