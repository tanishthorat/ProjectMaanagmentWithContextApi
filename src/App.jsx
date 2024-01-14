import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    slectedProjectId: null,
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
        slectedProjectId: null,
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
        slectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        slectedProjectId: undefined,
      };
    });
  }

  function handleCancleAddProject() {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        slectedProjectId: null,
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
        slectedProjectId: projectId,
        projectsData: [...prevProjects.projectsData, newProject],
      };
    });
  }

  const selectedProject = projects.projectsData.find(
    (project) => project.id === projects.slectedProjectId
  );

  let mainContent = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projects.tasks}
      onTaskAdd={handleAddTasks}
      onTaskDelete={handleDeleteTasks}
    />
  );
  if (projects.slectedProjectId === null) {
    mainContent = <NoProjects onStartAddProject={handleStartAddProject} />;
  } else if (projects.slectedProjectId === undefined) {
    mainContent = (
      <NewProject onAdd={handleAdd} onCancel={handleCancleAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projects.projectsData}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.slectedProjectId}
      />
      {mainContent}
    </main>
  );
}

export default App;
