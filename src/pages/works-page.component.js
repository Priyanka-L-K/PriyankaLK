import React, { useEffect } from "react";
import WorkCard from "../components/work-card.component";
import works from "../data/work.json";
import schools from "../data/education.json";
import "../css/global.css";
import "../css/work-card.css";
import EduCard from "../components/edu-card.component";
import Certification from "../components/certification.component";
import Publications from "../components/publications.component";

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const p = [1, 2, 3];
  return (
    <div className="parent-div content page-top-padding">
      <br />
      <div className="heading">Work experience</div>
      <div className="row">
        {works.works.map((exp) => (
          <div>
            <WorkCard exp={exp} />
          </div>
        ))}
      </div>
      <br />
      <div className="heading">Education</div>
      <div className="row">
        {schools.education.map((edu) => (
          <div>
            <EduCard edu={edu} />
          </div>
        ))}
      </div>
      <br />
      <div className="heading">Publication</div>
      <div className="row">
        {schools.publications.map((publ) => (
          <div>
            <Publications publ={publ} />
          </div>
        ))}
      </div>
      <br />
      <div className="heading">Certification</div>
      <div className="row">
        {schools.certifications.map((cert) => (
          <div>
            <Certification cert={cert} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
