import React from "react";
import Task from "./Task";
import { TodosStruc } from "./TodoTask";

type Props = {
  cObj: TodosStruc;
  change: Function;
};

export default function CompletedTask({ cObj, change }: Props) {
  return (
    <div>
      {cObj?.map((todo, index) => {
        return (
          <Task
            text={todo.task}
            status={todo.status}
            key={todo.task + index}
            change={() => {
              change(index);
            }}
            // setComp={() => {}}
          />
        );
      })}
    </div>
  );
}
