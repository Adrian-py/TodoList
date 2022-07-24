import React from "react";

export default function TaskInput({ handleNewTask }) {
  function handleFormSubmission(e) {
    e.preventDefault();
    let newTask = document.getElementById("task-input__input");
    handleNewTask(newTask.value);
    newTask.value = "";
  }

  return (
    <>
      <form action="" className="task-input" onSubmit={handleFormSubmission}>
        <label className="task-input__label" htmlFor="task-input">
          Enter a new task here!
        </label>
        <input
          type="text"
          name="task-input"
          className="task-input__input"
          id="task-input__input"
          placeholder="Enter new task here!"
        />
        <button className="task-input__submit" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
