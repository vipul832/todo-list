import React, { Component } from "react";
import Task from "./Task";

const todoObj = [
  {
    task: "Buy new sweatshirt",
    status: true,
  },
  {
    task: "Begin promotional phase",
    status: true,
  },
  {
    task: "Read an article",
    status: false,
  },
  {
    task: "Try not to fall asleep",
    status: false,
  },
  {
    task: "Watch 'Sherlock'",
    status: false,
  },
  {
    task: "Begin QA for the product",
    status: false,
  },
  {
    task: "Go for a walk",
    status: false,
  },
];

export default class TodoTask extends Component {
  render() {
    return (
      <div className="task-area">
        {todoObj.map((todo) => {
          return <Task text={todo.task} status={todo.status} />;
        })}
      </div>
    );
  }
}
