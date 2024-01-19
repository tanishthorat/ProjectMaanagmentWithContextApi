import React, { useContext } from "react";
import NewTasks from "./NewTasks";
import { ProjectContext } from "../Context/ProjectContextProvider";

function Tasks({ tasks }) {
  const ctxValues = useContext(ProjectContext);
  // console.log(tasks);
  return (
    <section>
      <h2 className="text-2xl text-slate-700 font-bold mb-4 ">Tasks</h2>
      <NewTasks />
      {tasks.length === 0 && (
        <p className="text-slate-800 my-4">
          This Project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4  mt-8 rounded-md bg-slate-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-slate-700 hover:text-red-400"
                onClick={() => ctxValues.onTaskDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
