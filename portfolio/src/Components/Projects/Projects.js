import React from 'react';
import projects from '../../projects.json';
import {Row} from 'react-bootstrap';
import ProjectCard from './ProjectCard'

class Projects extends React.Component{

  displayProjects=projects=>{
    return projects.map((project, id) => {
      return <ProjectCard key={id} project={project}/>
    })
  }
  render(){
    return(
      <>
      <Row>
        {this.displayProjects(projects)}
      </Row>
     
      </>
    )
  }
 
}

export default Projects;