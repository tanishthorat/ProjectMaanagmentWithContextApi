import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: {},
  onTaskAdd: () => {},
  onTaskDelete: () => {},
  handleDeleteProject: () => {},
  handleSelectProject: () => {},
  handleStartAddProject: () => {},
  handleCancleAddProject: () => {},
  handleAdd: () => {},
  selectedProject: null,
});

export default function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState({
    selectedProjectId: null,
    projectsData: [],
    tasks: [],
  });

  function handleAddTasks(text) {
    setProjects((prevProjects) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevProjects.slectedProjectId,
      };
      return {
        ...prevProjects,
        tasks: [newTask, ...prevProjects.tasks],
      };
    });
  }

  function handleDeleteTasks(id) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        tasks: projects.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
        projectsData: projects.projectsData.filter(
          (project) => project.id !== prevProjects.slectedProjectId
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancleAddProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
      };
    });
  }

  function handleAdd(ProjectData) {
    setProjects((prevProjects) => {
      const projectId = Math.random();
      const newProject = {
        ...ProjectData,
        id: projectId,
      };
      return {
        ...prevProjects,
        selectedProjectId: projectId,
        projectsData: [...prevProjects.projectsData, newProject],
      };
    });
  }

  const selectedProject = projects.projectsData.find(
    (project) => project.id === projects.selectedProjectId
  );

  const ctxValue = {
    projects: projects,
    onTaskAdd: handleAddTasks,
    onTaskDelete: handleDeleteTasks,
    handleDeleteProject,
    handleSelectProject,
    handleStartAddProject,
    handleCancleAddProject,
    handleAdd,
    selectedProject,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
