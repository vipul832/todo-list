import React, { FormEvent, useEffect } from "react";

type inputStat = {
  instat: () => void;
};

export default function InputArea({ instat }: inputStat) {
  function getData(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();
  }

  useEffect(() => {
    function keyHandler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        // console.log(e.target.value);
        instat();
      }
      if (e.key === "Enter") {
      }
    }
    window.addEventListener("keydown", keyHandler);
    return () => {
      console.log("clear eventlistner");
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div className="input-text-area">
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          type="text"
          name="task"
          id="input-task-area"
          onChange={getData}
          autoFocus
        />
      </form>
    </div>
  );
}
