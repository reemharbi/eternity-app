import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import { Card } from 'semantic-ui-react';



export default class projectsList extends Component {



    render() {

      
        // Create list of project from the the filtered passed props 
        const projectsList = this.props.projects.map((project, index) => {
        return <ProjectItem  key={index} project={project} />;
        })
        console.log(this.props.activePage);
        const projectsPage = projectsList.slice((this.props.activePage-1) * 6,((this.props.activePage-1)*6)+6);

        // Paging the projects
 
        return (
            <>

                <Card.Group centered='true' doubling='true' stackable='true'>{projectsPage}</Card.Group>
                
            </>
        )
    }
}
