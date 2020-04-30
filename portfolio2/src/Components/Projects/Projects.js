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
        <div className="ui container" style={{"padding":"0 auto"}}>   
            <div className="ui link cards four wide column" style={{"padding":"5px"}}>
            {this.displayProjects(projects)}
            </div>
        </div>
    )
  }
 
}

export default Projects;