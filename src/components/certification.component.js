import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"
import TagList from "./tag-list.component"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import { Link } from "react-router-dom";

const Certification = ({ cert }) => {
    const [isOpen, setOpen] = useState(false);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">{cert.name}
                    <span className="work-card__date--down"><br />{cert.end_date}</span>
                    </h5>
                    <div className="">
                        <span className="work-card__date--beside">{cert.end_date}</span>

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
                <div className="work-card__tag">{cert.institute}</div>

                {isOpen && (
                    <div>
                        {cert.score}
                        <a href="https://ethnus.com/certverify" target="_blank">
                        <div className="button" style={{ display: "inline-block" }}>
                        View Certificate
                        </div>
                        </a>
                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default Certification;