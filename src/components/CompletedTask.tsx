import React from "react";
import Task from "./Task";
import { TodosStruc } from "./TodoTask";

type props = {
  cObj: TodosStruc;
};

export default function CompletedTask({ cObj }: props) {
  return (
    <div>
      {cObj?.map((todo, index) => {
        return (
          <Task
            text={todo.task}
            status={todo.status}
            key={todo.task + index}
            setComp={() => console.log("Delete")}
          />
        );
      })}
    </div>
  );
}
