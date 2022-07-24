import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./styles/css/style.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function handleNewTask(newTask) {
    setTaskList([...taskList, { id: uuid(), task: newTask }]);
  }

  function handleEditTask(originalID, newTask) {
    let updatedTaskList = taskList;

    for (var i = 0, listLength = updatedTaskList.length; i < listLength; i++) {
      if (updatedTaskList[i].id === originalID) {
        updatedTaskList[i].task = newTask;
        break;
      }
    }

    setTaskList(updatedTaskList);
  }

  function handleDeleteTask(delTask) {
    console.log(delTask);
    let updatedTaskList = taskList.filter((task) => task.id !== delTask);
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <h1 className="title">TodoList</h1>
      <div className="container">
        <TaskInput handleNewTask={handleNewTask} />
        <TaskList
          taskList={taskList}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}
