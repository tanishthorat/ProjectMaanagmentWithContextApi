import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import { useContext } from "react";
import SelectedProject from "./components/SelectedProject";
import ProjectContextProvider from "./Context/ProjectContextProvider";
import { ProjectContext } from "./Context/ProjectContextProvider";

//its a Woking Code

function App() {
  const { projects } = useContext(ProjectContext);

  console.log(projects.slectedProjectId);

  let mainContent = <SelectedProject />;
  if (projects.selectedProjectId === null) {
    mainContent = <NoProjects />;
  } else if (projects.selectedProjectId === undefined) {
    mainContent = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {mainContent}
    </main>
  );
}

function AppWithProvider() {
  return (
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  );
}

export default AppWithProvider;
