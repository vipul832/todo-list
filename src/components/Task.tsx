import React from "react";
type TaskProps = {
  text: string;
  status: boolean;
};

export default function Task(props: TaskProps) {
  return (
    <div className="d-flex justify-content-between my-2 align-items-center">
      <p
        className={`m-0 fs-5 ${props.status ? "text-secondary" : "text-dark"}`}
      >
        {props.text}
      </p>
      {/* <input type="checkbox" checked={props.status} /> */}
      <button className="stat-btn">
        {" "}
        <img
          id="stat-img"
          src={`${
            props.status
              ? "./src/assets/task-completed.png"
              : "./src/assets/task-not-completed.png"
          }`}
          alt="status"
          style={{ width: "1.8rem", height: "1.8rem" }}
        />
      </button>
    </div>
  );
}
