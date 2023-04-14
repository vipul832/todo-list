import React from "react";
type TaskProps = {
  text: string;
  status: boolean;
  setComp: Function;
  delObj: Function;
};

export default function Task(props: TaskProps) {
  return (
    <div className="d-flex justify-content-between my-2 align-items-center">
      <p
        className={`m-0 fs-5 ${props.status ? "text-secondary" : "text-dark"}`}
      >
        {props.text}
      </p>
      <button
        className="stat-btn"
        onClick={() => {
          props.status ? props.delObj() : props.setComp();
        }}
      >
        {" "}
        <img
          id="stat-img"
          src={`${
            props.status
              ? "./public/assets/task-completed.png"
              : "./public/assets/task-not-completed.png"
          }`}
          alt="status"
          style={{ width: "1.8rem", height: "1.8rem" }}
        />
      </button>
    </div>
  );
}
