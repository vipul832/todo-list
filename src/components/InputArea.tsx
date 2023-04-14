import React, { FormEvent, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

type InputStat = {
  instat: () => void;
  addData: Function;
};

export default function InputArea({ instat, addData }: InputStat) {
  const value = useRef<HTMLInputElement>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (value.current) {
      const newData = { task: value.current.value, status: false };
      addData(newData);
      value.current.value = "";
      toast.success("Task Added Successfully");
    }
  }

  useEffect(() => {
    function keyHandler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        // console.log(e.target.value);
        instat();
      }
    }
    window.addEventListener("keydown", keyHandler);
    return () => {
      console.log("clear eventlistner");
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div className="input-text-area justify-content-center d-flex">
      <form onSubmit={submitHandler}>
        <input
          ref={value}
          className="form-control"
          type="text"
          name="task"
          id="input-task-area"
          autoFocus
          placeholder="Enter Your Task"
        />
      </form>
    </div>
  );
}
