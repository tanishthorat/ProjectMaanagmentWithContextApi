import React, { useContext, useRef, useState } from "react";
import { ProjectContext } from "../Context/ProjectContextProvider";

function NewTasks({}) {
  const ctxValues = useContext(ProjectContext);

  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState(null);

  function handleTaskInput() {
    setError(null);
    if (taskInput.trim() === "") {
      setError(<p className="text-red-400">Please add a valid task.</p>);
      return;
    }
    ctxValues.onTaskAdd(taskInput);
    setTaskInput("");
  }

  return (
    <>
      {error && error}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className=" w-64 px-2 py-1 rounded-sm bg-slate-200"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="text-slate-700 hover:text-slate-950"
          onClick={handleTaskInput}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTasks;
