import React from "react";
import { getDocuments } from "@/functions/firebase/getData";
import ProjectsMain from "@/components/admin/project/projects";
const AllProjectsPage = ({ projects }) => {
  return (
    <div>
      <ProjectsMain projects={projects} />
    </div>
  );
};


export default AllProjectsPage;


// serverside
  AllProjectsPage.getInitialProps = async (context) => {
  const Projects = await getDocuments("projects"); //  []


  console.log("projectsData", Projects);


  return {
    // props from serverside will go to props in clientside
    projects: Projects,
  };
};


