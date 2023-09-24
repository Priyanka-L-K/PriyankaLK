import React from "react";

import { BsFillTriangleFill, BsFillSquareFill, BsFillPentagonFill } from "react-icons/bs";
import "../css/leetcode-card.css";

// const category = {
//     easy: 'EASY',
//     medium: 'MEDIUM',
//     hard: 'HARD',
// };

const LeetcodeCard = ({ category, count, className }) => {

    const getIcon = (iconName) => {
        switch (iconName) {
            case "EASY":
                return <BsFillTriangleFill size={50} color="white" />;
            case "MEDIUM":
                return <BsFillSquareFill size={50} color="white" />;
            case "HARD":
                return <BsFillPentagonFill size={50} color="white" />;
            default:
                return null;
        }
    }


    return (
        <div class="col-md-4">
            <div class={`card ${className} leetcode-card`}>
                <div class="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="leetcode__icon">

                            {getIcon(category)}
                        </div>
                        
                        <div class="card-text leetcode-card__text">{category}</div>

                        <div class="card-title leetcode-card__number">{count}</div>
                    </div>
                </div>
            </div>
        </div>)
}



export default LeetcodeCard;