import React from "react";
type TaskProps = {
  text: string;
};

export default function Task(props: TaskProps) {
  return (
    <div className="d-flex justify-content-between my-3">
      <p className="m-0">{props.text}</p>
      <input type="radio" />
    </div>
  );
}
