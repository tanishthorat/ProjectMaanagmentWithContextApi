import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

import React, { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContextProvider";

export default function NoProjects() {
  const { handleStartAddProject: onStartAddProject } =
    useContext(ProjectContext);

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-slate-500 my-4">
        No Project Selected
      </h2>
      <p className=" text-slate-500 mb-4">
        Select a project <br /> or get started with a new one
      </p>
      <p className="mt-2">
        <Button onClick={onStartAddProject}>Creater new project</Button>
      </p>
    </div>
  );
}
