import React, { useState } from "react";
import "../css/work-card.css"
import "../css/global.css"
import TagList from "./tag-list.component"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { LuCircleDot } from "react-icons/lu"
import LinkBadge from "./link-badge.component";
import { Link } from "react-router-dom";

const EduCard = ({ edu }) => {
    const [isOpen, setOpen] = useState(false);


    return (<div className="pt-4">

        <div className={`card work-card w-100`} type="button" onClick={() => { setOpen(!isOpen) }}>

            <div className="card-body work-card__body">
                <div className="d-flex justify-content-between">
                    <h5 className="work-card__title">{edu.school_name}

                    <span className="work-card__date--down"><br />{edu.end_date}</span>
                    </h5>

                    <div className="">
                        <span className="work-card__date--beside">{edu.end_date}</span>

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
                <div className="work-card__tag">{edu.degree} in {edu.major}</div>

                {isOpen && (
                    <div>
                        <TagList tags={edu.courses} className="courses-tag" />

                    <br/>
                        <div className="work-card__content">

                        <span> <LuCircleDot /> </span> &nbsp;
                            {edu.achievement}

                        </div>
                        <br/>
                        <div className="d-flex flex-wrap">
                        {edu.links.map((link) => {
                            return <LinkBadge
                                websiteLink={link.website_link}
                                linkname={link.linkname}
                                icon={link.icon}
                                color={link.color}
                            />
                        })}
                        </div>
                    </div>)
                }
            </div>
        </div>

    </div>)
}

export default EduCard;