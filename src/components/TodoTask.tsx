import React, { useEffect, useState } from "react";
import InputAndBtn from "./InputAndBtn";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";

export type TaskStruc = {
  task: string;
  status: boolean;
};

export type TodosStruc = TaskStruc[];

function getLocalData(): TodosStruc {
  let localData = localStorage.getItem("todos");
  if (localData) {
    let mainData: TodosStruc = JSON.parse(localData);
    return mainData;
  }
}

export default function TodoTask() {
  const [todosObj, setTodosObj] = useState<TodosStruc>(getLocalData);
  const [pending, setPending] = useState<TodosStruc>([]);
  const [complete, setComplete] = useState<TodosStruc>([]);

  useEffect(() => {
    let temPending: TodosStruc;
    let temComplete: TodosStruc = [];
    temPending = todosObj?.filter((task: TaskStruc) => {
      if (task.status != true) {
        return task;
      } else {
        temComplete?.push(task);
      }
    });
    setPending(temPending);
    setComplete(temComplete);
  }, []);

  function setCompleteTask(index2: number) {
    let temP: TodosStruc = [];
    let task: TodosStruc = pending.filter((todo, index) => {
      if (index === index2) {
        return todo;
      } else {
        temP.push(todo);
      }
    });
    task[0].status = true;
    console.log([...complete, ...task]);
    setComplete([...complete, ...task]);
    setPending(temP);
  }

  return (
    <div className="">
      <div className="task-area">
        <CompletedTask cObj={complete} />
        <PendingTask pObj={pending} setComp={setCompleteTask} />
      </div>
      <InputAndBtn />
    </div>
  );
}
