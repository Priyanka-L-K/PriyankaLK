import React, { useState, useEffect } from 'react';
import "../css/home.css"
import axios from 'axios';
import Typewriter from "typewriter-effect";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';
import TagList from '../components/tag-list.component';
import { AiFillCheckCircle } from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import projectsData from "../data/projects.json";
import ProjectCardCarousel from '../components/project-card-carousel.component';



const Home = () => {

    const languages = ["Python", "C", "C++", "Java"]
    const halfLanguages = ["JavaScript"]
    const webTechnolgies = ["HTML", "CSS", "PHP"]
    const halfWebTechnolgies = ["React", "JavaScript"]
    const cloudTechnologies = ["AWS"]
    const dataScience = ["Data Analysis", "Data Visualization", "Data Modelling"]
    const database = ["MySQL", "Mongo DB"]
    const tools = ["git", "Jupyter", "Microsoft Visual Studio", "VS Code", "Xcode", "Figma", "Eclipse", "Android Studio", "Agile", "JUnit"]

    const leetcode_topics = ["Arrays", "Strings", "Linked List", " Two pointers", "Sorting", "Matrix", "Hash table", "Stack", "Queue", "Binary search", "Binary Search Tree", "Binary Tree", "Directed Graphs", "Undirected Graphs", "Depth First Search", "Breadth First Search"]

    const [leetcodeData, setLeetcodeData] = useState("")

    const category = {
        easy: 'EASY',
        medium: 'MEDIUM',
        hard: 'HARD',
    };

    // projects and released projects together
    const getCombinedProjects = () => {
        const combinedProjects = [...projectsData.all_projects[0].projects, ...projectsData.all_projects[1].projects];
        return combinedProjects;
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        
    
      }, []);
    return (
        <div className="parent-div parent-div-top content">


            <div className="home-parent-container">

                <div className="home-container">
                    <div>
                        <div className="helloiam">
                            Hello, I am
                        </div>

                        <div className="myname">
                            Priyanka Lakur Krishnamurthy
                        </div>

                        <div className="rolename">
                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter

                                        .pauseFor(100)
                                        .deleteAll()
                                        .typeString("Software Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Full stack developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("UI/UX Specialist")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Data Analyst")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("AI/ML Enthusiast")
                                        .start();
                                }}

                                style={{ zIndex: '0' }}
                            />



                        </div>


                    </div>
                    <div>
                        <img className="profile-pic" src="https://i.postimg.cc/JhYXfs2k/Screen-Shot-2023-09-23-at-5-09-48-PM.png" />
                    </div>


                </div>
                <div className="d-flex">
                    <div className="link-button">
                        <Link to="https://www.linkedin.com/in/priyanka-lakur/" target="_blank">
                            <AiFillLinkedin size={window.innerWidth <= 768 ? 20 : 30} color={"#0077B5"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="https://github.com/Priyanka-L-K" target="_blank">
                            <AiFillGithub size={window.innerWidth <= 768 ? 20 : 30} color={"#171717"} />
                        </Link>
                    </div>
                    <div className="link-button">
                        <Link to="mailto:priyankalakur@gmail.com" target="_blank">
                            <BiLogoGmail size={window.innerWidth <= 768 ? 20 : 30} color={"#c71610"} />
                        </Link>
                    </div>

                </div>


            </div>


            <div className="columns">
                <div className="about-me section left-section">
                    <div className=" section-box section-height lh-lg">
                        <div className="section-heading">
                            About me
                        </div>

                        <div className="section-content">
                        I’m a graduate student at University of Texas at Arlington pursuing Master’s in Computer Science with concentration in Database Systems and Software Engineering. 
                        My expertise lies in Python, C and C++, and I absolutely love coding. 
                        What drives me the most is the opportunity to use technology to create a real human impact and 
                        contribute to a sustainable world.<br /><br />

                        Throughout my journey, I have acquired a diverse range of skills, making me a versatile generalist. 
                        Problem-solving is my passion, and I am always eager to learn new technologies to stay ahead in the 
                        ever-evolving tech landscape.<br /><br />

                        I am a person who approaches learning and everyday life in an innovative, curious and persistent manner. Also, someone who enjoys taking part in extracurricular activities.
                        <br /><br />

                        My main goal is to build applications that have a meaningful impact on people's lives, 
                        leveraging my experience with Databases, Software development and Machine Learning. I believe in the power of 
                        continuous improvement, always striving to be better than I was yesterday.

                        <br />


                        </div>

                        <Link to="https://c31104fa-0e1b-42f1-b5e8-80fd49444711.usrfiles.com/ugd/c31104_bf6adaf42ed545dba1f36bbc7027952d.pdf" target="_blank">

                            <div className="button" style={{ float: "None" }}>

                                View Resume
                            </div>
                        </Link>
                    </div>


                </div>



                <div className="skills ">
                    <div className="section ">

                        <div className="section-box section-height">
                            <div className="section-heading">
                                Skills
                            </div>
                            <div >

                                <div className="section-sub-heading">
                                    Languages
                                </div>
                                <div className="d-flex">

                                </div>
                                <TagList tags={languages} className="language-tag" />

                                <div className="section-sub-heading">
                                    Web technologies
                                </div>
                                <TagList tags={webTechnolgies} faintTags={halfWebTechnolgies} className="tools-tag" />

                                <div className="section-sub-heading">
                                    Database
                                </div>
                                <TagList tags={database} className="database-tag" />

                                <div className="section-sub-heading">
                                    Cloud technologies
                                </div>
                                <TagList tags={cloudTechnologies} className="cloud-tag" />

                                <div className="section-sub-heading">
                                    Data Science
                                </div>
                                <TagList tags={dataScience} className="datascience-tag" />
                                <div className="section-sub-heading">
                                    Others
                                </div>
                                <TagList tags={tools} className="libraries-tag" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className="section ">
                <div className="section-box" style={{ padding: 0 }}>
                    <div className="section-heading text-center pt-2">
                        Projects
                    </div>

                    <div className="">

                        <Carousel >
                            {
                            
                            
                            getCombinedProjects().map((project) => (
                                <div className="carousel-card">
                                    <Link className="" to={`/projects/${project.category}/${project.id}`} style={{ textDecoration: 'none' }}>

                                        <ProjectCardCarousel project={project} cardWidth={"30rem"} displayTag={false} />

                                    </Link>
                                </div>
                            ))}

                        </Carousel>

                    </div>
                </div>
            </div>



        </div>
    )
}



export default Home