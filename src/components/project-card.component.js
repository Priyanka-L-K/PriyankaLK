import React from "react";
import "../css/project-card.css"

const ProjectCard = ({project, cardWidth, displayTag}) => {


    return (<div className="pt-4">

        <div className="card project-card" style={{width:cardWidth}}>
            <img className="project-card__image p-2" src={project.thumbnail} alt="Card image cap" />
            <div className="card-body project-card__body">
                <h5 className="project-card__title">{project.heading}</h5>
                {displayTag &&
                <p className="project-card__tag">{project.tagline}</p>}
               
            </div>
        </div>

    </div>)
}

export default ProjectCard;