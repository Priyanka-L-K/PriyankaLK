import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import "../css/global.css";
import "../css/project-detail.css";
import projectsData from "../data/projects.json";
import works from "../data/work.json";

import { LuCircleDot } from "react-icons/lu";
import LinkBadge from "../components/link-badge.component";

import TagList from '../components/tag-list.component';
import { getProjectCategoryIndex } from "../Utils/utility";

const ProjectDetail = () => {

    const { id, projectType } = useParams();
    const { companyId, companyProjectType, projectId } = useParams();

    const project_index = id ? getProjectCategoryIndex(projectsData.all_projects, projectType) : getProjectCategoryIndex(works.works[companyId].all_projects, companyProjectType);

    const project = id ? projectsData.all_projects[project_index].projects[id] : works.works[companyId].all_projects[0].projects[projectId];

    useEffect(() => {
        // Scroll to the top once the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="parent-div page-top-padding">
            {companyId ? <Link to={`/companyprojects/${companyId}`}> Back to {works.works[companyId].company_name} projects</Link> : ""}

            <div className="container">

                <div className="d-flex justify-content-between ">
                    <div className="heading">
                        {project.heading}
                        <div className="date--down">  {project.startDate}</div>

                        <div className="section-content"></div>
                        <div className="d-flex flex-wrap">
                            {project.links.map((link, index) => {
                                return <LinkBadge
                                    key={index}
                                    websiteLink={link.website_link}
                                    linkname={link.linkname}
                                    icon={link.icon}
                                    color={link.color}
                                />
                            })}
                        </div>
                    </div>
                    <div className="date--beside">  {project.startDate}</div>
                </div>

                <div className="pt-2">
                    <TagList tags={project.languages} className="language-tag" />
                    <TagList tags={project.tools} className="tools-tag" />
                    <TagList tags={project.libraries} className="libraries-tag" />
                </div>

                <div className="pt-2 section-content">
                    <div className="section-sub-heading">Key features</div>
                    {project.features.map((feature, index) => {
                        return (
                            <div key={index}>
                                <span> <LuCircleDot /> </span> &nbsp;
                                <span dangerouslySetInnerHTML={{ __html: feature }} />
                            </div>
                        );
                    })}
                </div>

                <div className="pt-2 section-content">
                    <div className="section-sub-heading">Project Images</div>
                    {project.images.map((image, index) => {
                        return (
                            <div key={index} className="d-flex flex-column align-items-start mb-4">
                                <div className="image-description mb-2">{image.description}</div>
                                <img className="project-image" src={image.url} alt={image.description} />
                            </div>
                        );
                    })}
                </div>

                <div className="section-sub-heading">
                    Project Impact
                </div>

                <div className="section-content">
                    {project.project_impact}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;
