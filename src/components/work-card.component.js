import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import LinkBadge from "./link-badge.component";
import { Link } from "react-router-dom";

import { LuCircleDot } from "react-icons/lu";


const WorkCard = ({ exp }) => {

    const languages = exp.languages;
    const tools = exp.tools;
    const libraries = exp.libraries;

    const [isOpen, setOpen] = useState(false);

    const handleViewAllClick = (event) => {
        event.stopPropagation();
    }
    console.log(exp);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <div className="work-card__title">
                        {exp.role_name}
                        <span className="work-card__date--down">{exp.start_date} - {exp.end_date}</span>
                    </div>
                    <div className="">
                        <span className="work-card__date--beside">{exp.start_date} - {exp.end_date}</span>
                        <span >
                            <span className="icon-container">

                                {!isOpen ? (
                                    <IoMdArrowDropdownCircle />
                                ) : (

                                    <IoMdArrowDropupCircle />
                                )}

                            </span>
                        </span>
                    </div>
                </div>
                <div className="work-card__tag">{exp.company_name}</div>



                <div className="d-flex flex-wrap">
                    {languages.map((language) => {
                        return <div className="tag language-tag"> {language} </div>
                    })}

                    {tools.map((tool) => {
                        return <div className="tag tools-tag"> {tool} </div>
                    })}

                    {libraries.map((library) => {
                        return <div className="tag libraries-tag"> {library} </div>
                    })}

                </div>

               
                    <div className= {` ${isOpen ? 'work-card__content-open' : 'work-card__content'}`}>


                        {exp.achievements.map((feature) => {
                            return <div>
                                <span> <LuCircleDot /> </span> &nbsp;
                                <span dangerouslySetInnerHTML={{ __html: feature }} />
                                <br/><br/>
                            </div>

                        })}


                        <div className="d-flex flex-wrap">
                        {exp.links.map((link) => {
                            return <LinkBadge
                                websiteLink={link.website_link}
                                linkname={link.linkname}
                                icon={link.icon}
                                color={link.color}
                            />
                        })}
                        </div>
                        {/* {exp.all_projects &&
                        <Link className="button w-100 mt-4" onClick={handleViewAllClick} to={`/companyprojects/${exp._id}`} >
                            View all projects
                        </Link>} */}




                    </div>
                
            </div>
        </div>

    </div>)
}

export default WorkCard;