import React from "react";

import TaskItem from "./TaskItem";

export default function TaskList({
  taskList,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <div className="task-list">
      <p className="task-list__num">{taskList.length} tasks left</p>
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            taskId={task.id}
            taskText={task.task}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </div>
  );
}
