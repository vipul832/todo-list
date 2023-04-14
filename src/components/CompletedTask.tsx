import React from "react";
import Task from "./Task";
import { TodosStruc } from "./TodoTask";

type Props = {
  cObj: TodosStruc;
  delObj: Function;
};

export default function CompletedTask({ cObj, delObj }: Props) {
  return (
    <div>
      {cObj?.map((todo, index) => {
        return (
          <Task
            text={todo.task}
            status={todo.status}
            key={todo.task + index}
            delObj={() => {
              delObj(index);
            }}
            setComp={() => {}}
          />
        );
      })}
    </div>
  );
}
