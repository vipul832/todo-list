import React from "react";
import Task from "./Task";
import { TodosStruc } from "./TodoTask";

type props = {
  pObj: TodosStruc;
  setComp: Function;
};

export default function PendingTask({ pObj, setComp }: props) {
  return (
    <div>
      {pObj?.map((todo, index) => {
        return (
          <Task
            text={todo.task}
            status={todo.status}
            key={todo.task + index}
            setComp={() => setComp(index)}
          />
        );
      })}
    </div>
  );
}
