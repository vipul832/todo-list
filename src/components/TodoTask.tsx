import React, { useEffect, useState } from "react";
import InputAndBtn from "./InputAndBtn";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";
import toast from "react-hot-toast";

// General structure of Any Task
export type TaskStruc = {
  task: string;
  status: boolean;
};

// Structure of Main Object
export type TodosStruc = { todos: TaskStruc[]; date: number };

// Today Date
const todayDate = new Date().getDate();

// Initial Value
const reSetData: TodosStruc = { todos: [], date: todayDate };

// Initial function for Main Object
function getLocalData(): TodosStruc {
  // console.log("call");
  let localData = localStorage.getItem("todos");

  if (localData !== null) {
    let mainData: TodosStruc = JSON.parse(localData);
    if (mainData.date === todayDate) {
      return mainData;
    } else {
      localStorage.setItem("todos", JSON.stringify(reSetData));
      return reSetData;
    }
  } else {
    // console.log("not found");
    localStorage.setItem("todos", JSON.stringify(reSetData));
  }
  return reSetData;
}

// Main Component Function
export default function TodoTask() {
  const [todosObj, setTodosObj] = useState<TodosStruc>(getLocalData);
  const [pending, setPending] = useState<TaskStruc[]>([]);
  const [complete, setComplete] = useState<TaskStruc[]>([]);

  //Add new Task in Todo List function
  function addDataInTodo(obj: TaskStruc) {
    const getLocal = localStorage.getItem("todos");
    if (getLocal !== null) {
      const tempObj: TodosStruc = JSON.parse(getLocal);
      if (tempObj.date === todayDate) {
        setTodosObj({ ...todosObj, todos: [...todosObj.todos, obj] });
      } else {
        // console.log("different date");
        localStorage.setItem(
          "todos",
          JSON.stringify({ todos: [obj], date: todayDate })
        );
        setTodosObj({ todos: [obj], date: todayDate });
      }
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify({ todos: [obj], date: todayDate })
      );
      setTodosObj({ todos: [obj], date: todayDate });
    }
  }

  // Update local storage function as Todo list change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosObj));
  }, [todosObj]);

  // Bifurcation of Pending and Completed Task function
  useEffect(() => {
    let temPending: TaskStruc[];
    let temComplete: TaskStruc[] = [];
    temPending = todosObj.todos?.filter((task: TaskStruc) => {
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
    let temP: TaskStruc[] = [];
    let task: TaskStruc[] = pending.filter((todo, index) => {
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
    localStorage.setItem(
      "todos",
      JSON.stringify({ ...todosObj, todos: upDataTodos })
    );
    setTodosObj({ ...todosObj, todos: upDataTodos });
    toast.success("Task Completed");
  }

  //Delete function
  function deleteData(index2: number) {
    const newTodosObj = todosObj.todos.filter((todos, index) => {
      if (index !== index2) {
        return todos;
      }
    });
    setTodosObj({ ...todosObj, todos: newTodosObj });
    toast.error("Task is Deleted");
  }

  return (
    <div className="">
      {todosObj.todos.length > 0 ? (
        <div className="task-area">
          <CompletedTask cObj={complete} change={deleteData} />
          <PendingTask pObj={pending} change={setCompleteTask} />
        </div>
      ) : (
        <div className="task-area2">
          <h4>All Tasks Completed</h4>
          <img src="/assets/complete.png" alt="" width={"70%"} />
        </div>
      )}
      <InputAndBtn addData={addDataInTodo} />
    </div>
  );
}
