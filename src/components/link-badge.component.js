import React from "react";
import { Link } from "react-router-dom";
import "../css/link-badge.css";

import { RiGlobalLine } from "react-icons/ri"
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import {FaKaggle, FaItchIo, FaUniversity, FaMedium, FaGlobe} from "react-icons/fa";
import {BiLogoPlayStore} from "react-icons/bi";
import {TfiThought} from "react-icons/tfi";
import {BsNewspaper} from "react-icons/bs";
import {SiIeee} from "react-icons/si";

const LinkBadge = ({ websiteLink, linkname, icon, color }) => {
    const handleClick = (event) => {
        event.stopPropagation();
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case "github":
                return <AiFillGithub size={14} color="white" />;
            case "youtube":
                return <AiFillYoutube size={12} color="white" />;
            case "kaggle":
                return <FaKaggle color="white" size={12} />;
            case "medium":
                return <FaMedium color="white" size={12} />;
            case "itch":
                return <FaItchIo color="white" size={14} />;
            case "university":
                return <FaUniversity color="white" size={14} />;
            case "appstore":
                return <BiLogoPlayStore color="white" size={14} />;
            case "blog":
                return <TfiThought color="white" size={14} />;
            case "news":
                return <BsNewspaper color="white" size={14} />;
            case "ieee":
                return <SiIeee color="white" size={14} />;
            case "react":
                return <RiGlobalLine size={14} color="white" />;
            case "website":
                    return <FaGlobe color="white" size={14} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Link to={websiteLink} target="_blank" style={{ textDecoration: 'none' }} onClick={handleClick}>
                <div className="d-flex align-middle">
                    <div className="link-box d-flex">
                        <div className="link-box__icon-holder" style={{ backgroundColor: color }}>
                            <div className="d-flex justify-content-center pt-1 pb-1 icon-size">
                                {getIcon(icon)}
                            </div>
                        </div>
                        <div className="link-box__name">
                            {linkname}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LinkBadge;
