import React from "react";
import { useState } from "react";

export default function TaskItem({
  taskId,
  taskText,
  handleEditTask,
  handleDeleteTask,
}) {
  const [editStatus, setEditStatus] = useState(false);
  const [currTaskText, setCurrTaskText] = useState(taskText);

  function toggleTaskEditor() {
    setEditStatus(!editStatus);
  }

  function updateTaskText(e) {
    handleEditTask(taskId, currTaskText);
    toggleTaskEditor();
    e.preventDefault();
  }

  function updateCurrText(e) {
    taskText = e.target.value;
    setCurrTaskText(e.target.value);
  }

  function deleteTask() {
    handleDeleteTask(taskId);
  }

  return (
    <div className="task-list__item">
      <p className={!editStatus ? "task-list__item__text" : "hidden"}>
        {currTaskText}
      </p>

      <form
        action=""
        className={editStatus ? "task-list__item__edit-input" : "hidden"}
        onSubmit={updateTaskText}
      >
        <input type="text" value={currTaskText} onChange={updateCurrText} />
        <button type="submit">Save</button>
      </form>

      <div className="task-list__item__buttons">
        <button
          className="task-list__item__buttons__button task-list__item__buttons__button--edit"
          onClick={toggleTaskEditor}
        >
          Edit
        </button>
        <button
          className="task-list__item__buttons__button task-list__item__buttons__button--del"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
