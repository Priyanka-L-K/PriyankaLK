import React from 'react';
import "../css/global.css";
import "../css/tag-list.css";

const TagList = ({ tags, faintTags, className }) => {



    return (
        <div className={`d-flex flex-wrap`}>
       
            {tags.map((tag, index) => (
                <div key={index} className={`tag ${className}`}>
                    {tag}
                </div>
            ))}
             {faintTags? faintTags.map((tag, index) => (
                 
                <div key={index} className={`tag ${className} half-opacity-${className}`}>
                    {tag}
                </div>
            )) : ""}



        </div>
    );
};

export default TagList;