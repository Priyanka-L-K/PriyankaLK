import React, {useEffect} from 'react';
import ProjectCard from '../components/project-card.component';
import { Link, useParams } from "react-router-dom"
import projectsData from "../data/projects.json";
import works from "../data/work.json"

const Projects = () => {

    const { companyId } = useParams();

    const all_projects = companyId ? works.works[parseInt(companyId)].all_projects : projectsData.all_projects;

    useEffect(() => {
        window.scrollTo(0, 0);
    
      }, []);

    return (

        <div className="parent-div content page-top-padding">

            {all_projects.map((project_category) => (

                <div>
                    <br/>
                    <div className="heading"> {project_category.name} </div>

                    <div className="row">

                        {project_category.projects.map((project) => (
                            <div className="col-sm-4">
                                <Link className="" to={companyId ? `/companyprojects/${companyId}/${project_category.name}/${project.id}` : `/projects/${project_category.name}/${project.id}`} style={{ textDecoration: 'none' }}>
                                    <ProjectCard project={project} displayTag={true} />
                                </Link>
                            
                            </div>
                        ))}
                        
                    </div>
                    
                </div>

            ))}



        </div>
    )
}

export default Projects