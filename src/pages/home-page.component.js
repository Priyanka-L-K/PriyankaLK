import React, { useState, useEffect } from 'react';
import "../css/home.css"
import axios from 'axios';
import Typewriter from "typewriter-effect";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import TagList from '../components/tag-list.component';
import { Carousel } from 'react-responsive-carousel';
import projectsData from "../data/projects.json";
import ProjectCardCarousel from '../components/project-card-carousel.component';

const Home = () => {

    const languages = ["Python", "C", "C++", "Java", "SQL"]
    const halfLanguages = ["R"]
    const webTechnolgies = ["HTML", "CSS", "PHP", "Flask"]
    const halfWebTechnolgies = ["React", "JavaScript", "Node.js"]
    const cloudTechnologies = ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"]
    const dataEngineeering = ["Apache Kafka", "Apache Zookeeper", "Apache Spark", "Databricks"]
    const dataScience = ["Data Analysis", "Data Visualization", "Data Modelling", "NumPy",
        "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "PyTorch",
        "NLTK", "Spacy"]
    const database = ["MySQL", "Mongo DB", "Cassandra"]
    const tools = ["Tableau", "git", "Jupyter", "Selenium", "Microsoft Visual Studio",
        "VS Code", "Xcode", "Figma", "Eclipse", "Android Studio", "Agile", "JUnit"]

    const leetcode_topics = ["Arrays", "Strings", "Linked List", " Two pointers", "Sorting",
        "Matrix", "Hash table", "Stack", "Queue", "Binary search", "Binary Search Tree",
        "Binary Tree", "Directed Graphs", "Undirected Graphs", "Depth First Search",
        "Breadth First Search"]

    const category = {
        easy: 'EASY',
        medium: 'MEDIUM',
        hard: 'HARD',
    };

    // Fetch combined projects
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
                                        .typeString("Data Analyst")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("AI/ML Enthusiast")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("UI/UX Specialist")
                                        .start();
                                }}
                                style={{ zIndex: '0' }}
                            />
                        </div>
                    </div>
                    <div>
                        <img className="profile-pic" src="https://i.postimg.cc/JhYXfs2k/Screen-Shot-2023-09-23-at-5-09-48-PM.png" alt="Profile Pic" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="link-button">
                        <a href="https://www.linkedin.com/in/priyanka-lakur/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={window.innerWidth <= 768 ? 20 : 30} color={"#0077B5"} />
                        </a>
                    </div>
                    <div className="link-button">
                        <a href="https://github.com/Priyanka-L-K" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={window.innerWidth <= 768 ? 20 : 30} color={"#171717"} />
                        </a>
                    </div>
                    <div className="link-button">
                        <a href="mailto:priyankalakur@gmail.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoGmail size={window.innerWidth <= 768 ? 20 : 30} color={"#c71610"} />
                        </a>
                    </div>
                    <div className="link-button">
                        <a href="https://medium.com/@priyankalakur" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <a href="https://priyankalakurresume.tiiny.site/" target="_blank" rel="noopener noreferrer">
                <div className="button" style={{ float: "None", marginTop: "2rem", marginBottom: "1rem", textAlign: "center" }}>
                    View Resume
                </div>
            </a>

            <div className="columns">
                <div className="about-me section left-section">
                    <div className="section-box section-height lh-lg">
                        <div className="section-heading">
                            About me
                        </div>
                        <div className="section-content">
                            I’m a graduate student at University of Texas at Arlington pursuing Master’s in Computer Science with concentration in Database Systems and Software Engineering. My expertise lies in Python, C and C++, and I absolutely love coding. What drives me the most is the opportunity to use technology to create a real human impact and contribute to a sustainable world.<br /><br />Throughout my journey, I have acquired a diverse range of skills, making me a versatile generalist. Problem-solving is my passion, and I am always eager to learn new technologies to stay ahead in the ever-evolving tech landscape.<br /><br />I am a person who approaches learning and everyday life in an innovative, curious and persistent manner. Also, someone who enjoys taking part in extracurricular activities.<br /><br />My main goal is to build applications that have a meaningful impact on people's lives, leveraging my experience with Databases, Software development and Machine Learning. I believe in the power of continuous improvement, always striving to be better than I was yesterday.<br />
                        </div>
                    </div>
                </div>

                <div className="skills ">
                    <div className="section ">
                        <div className="section-box section-height">
                            <div className="section-heading">
                                Skills
                            </div>
                            <div>
                                <div className="section-sub-heading">
                                    Languages
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
                                    Data Engineering
                                </div>
                                <TagList tags={dataEngineeering} className="dataEngineeering-tag" />

                                <div className="section-sub-heading">
                                    Machine Learning
                                </div>
                                <TagList tags={dataScience} className="datascience-tag" />

                                <div className="section-sub-heading">
                                    Tools
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
                    <div>
                        <Carousel>
                            {getCombinedProjects().map((project) => (
                                <div className="carousel-card" key={project.id}>
                                    <Link to={`/projects/${project.category}/${project.id}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
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

export default Home;
