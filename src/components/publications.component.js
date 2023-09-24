import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"
import TagList from "./tag-list.component"

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import {SiIeee} from 'react-icons/si'
import { RiGlobalLine } from "react-icons/ri"
import ProjectCard from "./project-card.component";
import { Link } from "react-router-dom";

const Publications = ({ publ }) => {
    const [isOpen, setOpen] = useState(false);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">{publ.name}
                    <span className="work-card__date--down"><br />{publ.end_date}</span>
                    </h5>
                    <div className="">
                        <span className="work-card__date--beside">{publ.end_date}</span>

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
                <div className="work-card__tag">{publ.institute}</div>
                <div className="work-card__tag">{publ.conference}</div>

                {isOpen && (
                    <div>
                        {publ.score}
                        <a href="https://ieeexplore.ieee.org/document/10054275" target="_blank">
                        <div className="button" style={{ display: "inline-block" }}>
                        View Published Paper
                        
                        </div>
                        </a>

                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default Publications;