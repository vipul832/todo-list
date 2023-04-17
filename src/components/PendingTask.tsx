import React from "react";
import Task from "./Task";
import { TodosStruc } from "./TodoTask";

type Props = {
  pObj: TodosStruc;
  change: Function;
};

export default function PendingTask({ pObj, change }: Props) {
  return (
    <div>
      {pObj?.map((todo, index) => {
        return (
          <Task
            text={todo.task}
            status={todo.status}
            key={todo.task + index}
            change={() => change(index)}
          />
        );
      })}
    </div>
  );
}
