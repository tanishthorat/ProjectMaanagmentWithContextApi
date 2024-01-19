import Tasks from "./Tasks";
import React, { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContextProvider";

function SelectedProject() {
  const {
    selectedProject: project,
    handleDeleteProject: onDelete,
    projects: { tasks },
  } = useContext(ProjectContext);

  const formattedDate = new Date(project.duedate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b border-slate-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-slate-500 hover:text-slate-950 hover:font-semibold "
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-slate-400">{formattedDate}</p>
        <p className="text-slate-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default SelectedProject;
