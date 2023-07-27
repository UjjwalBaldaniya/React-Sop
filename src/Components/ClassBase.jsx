import React, { Component } from "react";
// import Demo from "./Demo";

export default class ClassBase extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <div className="main-div">
          <h1>{this.state.count}</h1>
          {/* <Demo name={this.state.count}/> */}
          <button onClick={() => this.handleClick()}>Add</button>
        </div>
      </>
    )
  }
}

