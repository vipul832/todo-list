import React, { useEffect, useState } from "react";
import InputAndBtn from "./InputAndBtn";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";
import toast from "react-hot-toast";

export type TaskStruc = {
  task: string;
  status: boolean;
};

export type TodosStruc = TaskStruc[];

// Initial function for Main Object
function getLocalData(): TodosStruc {
  console.log("call");
  let localData = localStorage.getItem("todos");
  let set: TodosStruc = [];
  if (localData) {
    if (localData !== null) {
      let mainData: TodosStruc = JSON.parse(localData);
      return mainData;
    }
  } else {
    localStorage.setItem("todos", JSON.stringify(set));
  }
  return set;
}

export default function TodoTask() {
  const [todosObj, setTodosObj] = useState<TodosStruc>(getLocalData);
  const [pending, setPending] = useState<TodosStruc>([]);
  const [complete, setComplete] = useState<TodosStruc>([]);

  //Add new Task in Todo List function
  function addDataInTodo(obj: TaskStruc) {
    setTodosObj([...todosObj, obj]);
  }

  // Update local storage function as Todo list change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosObj));
  }, [todosObj]);

  // Bifurcation of Pending and Completed Task function
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
  }, [todosObj]);

  // Setting Status of Task false to true
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
    const upDateComp = [...complete, ...task];
    setComplete(upDateComp);
    setPending(temP);
    const upDataTodos = [...upDateComp, ...temP];
    localStorage.setItem("todos", JSON.stringify(upDataTodos));
    setTodosObj(upDataTodos);
    toast.success("Task Completed");
  }

  //Delete function
  function deleteData(index2: number) {
    const newTodosObj = todosObj.filter((todos, index) => {
      if (index !== index2) {
        return todos;
      }
    });
    setTodosObj(newTodosObj);
    toast.error("Task is Deleted");
  }

  return (
    <div className="">
      <div className="task-area">
        <CompletedTask cObj={complete} change={deleteData} />
        <PendingTask pObj={pending} change={setCompleteTask} />
      </div>
      <InputAndBtn addData={addDataInTodo} />
    </div>
  );
}
