import React from "react";
type TaskProps = {
  text: string;
  status: boolean;
};

export default function Task(props: TaskProps) {
  return (
    <div className="d-flex justify-content-between my-2">
      <p
        className={`m-0 fs-5 ${props.status ? "text-secondary" : "text-dark"}`}
      >
        {props.text}
      </p>
      <input type="checkbox" checked={props.status} />
    </div>
  );
}
