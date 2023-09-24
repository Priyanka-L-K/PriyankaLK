import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">

                    <div className="d-flex justify-content-between">
                        <div>
                            <BsFillTelephoneFill color={"#171717"} /> <t/> (737-881-0954)
                        </div>

                        <div>
                            <BiLogoGmail color={"#c71610"}/> <t/>
                            <Link to="mailto:priyankalakur@gmail.com" target="_blank">
                             priyankalakur@gmail.com
                            </Link>
                        </div>

                        <div>
                            <AiFillLinkedin color={"#0077B5"} /> <t/>
                            <Link to="https://www.linkedin.com/in/priyanka-lakur/" target="_blank">
                            Linked in
                            </Link>
                        </div>

                        

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
