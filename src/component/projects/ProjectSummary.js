import React from 'react';

const ProjectSummary = ({project}) =>{
    console.log(project);
    return(
            <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{project.title}</span>
                        <p>Posted by The PARA Commando</p>
                        <p className="grey-text">3rd sep,2020,3am</p>
                    </div>
                </div>
    )
}
export default ProjectSummary;