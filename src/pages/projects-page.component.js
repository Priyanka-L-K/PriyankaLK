import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/project-card.component';
import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import works from "../data/work.json";

const Projects = () => {
    const { companyId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const all_projects = companyId ? works.works[parseInt(companyId)].all_projects : projectsData.all_projects;

    // Function to filter projects based on selected category
    const filteredProjects = selectedCategory
        ? all_projects.filter(category => category.name === selectedCategory)
        : [];

    // Function to filter other category projects
    const otherCategoryProjects = selectedCategory
        ? all_projects.filter(category => category.name !== selectedCategory)
        : all_projects;

    return (
        <div className="parent-div content page-top-padding">
            {/* Display project categories for filtering */}
            <div className="project-categories">
                <button onClick={() => setSelectedCategory(null)}>All Projects</button>
                {all_projects.map((project_category) => (
                    <button key={project_category.name} onClick={() => setSelectedCategory(project_category.name)}>
                        {project_category.name}
                    </button>
                ))}
            </div>

            {/* Display selected category projects first */}
            {filteredProjects.length > 0 && (
                <div>
                    <br/>
                    <div className="heading">{selectedCategory}</div>
                    <div className="row">
                        {filteredProjects.map((project_category) => (
                            project_category.projects.map((project) => (
                                <div key={project.id} className="col-sm-4">
                                    <Link className="" to={companyId ? `/companyprojects/${companyId}/${project_category.name}/${project.id}` : `/projects/${project_category.name}/${project.id}`} style={{ textDecoration: 'none' }}>
                                        <ProjectCard project={project} displayTag={true} />
                                    </Link>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            )}

            {/* Display other category projects */}
            {otherCategoryProjects.map((project_category) => (
                <div key={project_category.name}>
                    <br/>
                    <div className="heading">{project_category.name}</div>
                    <div className="row">
                        {project_category.projects.map((project) => (
                            <div key={project.id} className="col-sm-4">
                                <Link className="" to={companyId ? `/companyprojects/${companyId}/${project_category.name}/${project.id}` : `/projects/${project_category.name}/${project.id}`} style={{ textDecoration: 'none' }}>
                                    <ProjectCard project={project} displayTag={true} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
