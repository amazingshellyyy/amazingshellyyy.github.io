import React from 'react';
import projects from '../../projects.json';
import {Row} from 'react-bootstrap';
import ProjectCard from './ProjectCard'
import './project.scss';


class Projects extends React.Component{

  displayProjects=projects=>{
    return projects.map((project, id) => {
      return <ProjectCard key={id} project={project}/>
    })
  }
  render(){
    return(
      <div className="project-component">
        {this.displayProjects(projects)}
      </div>
    )
  }
 
}

export default Projects;