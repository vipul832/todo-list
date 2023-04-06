import React, { Component } from "react";
import Task from "./Task";

export default class TodoTask extends Component {
  render() {
    return (
      <div className="task-area">
        <Task text={"Buy new sweatshirt"} />
        <Task text={"Begin promotional phase"} />
        <Task text={"Read an article"} />
        <Task text={"Try not to fall asleep"} />
        <Task text={"Watch 'Sherlock'"} />
        <Task text={"Begin QA for the product"} />
        <Task text={"Go for a walk"} />
      </div>
    );
  }
}
