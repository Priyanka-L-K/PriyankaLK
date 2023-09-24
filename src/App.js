import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import react from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/navbar.component';

import Home from './pages/home-page.component';
import Works from './pages/works-page.component';
import Projects from './pages/projects-page.component';
import AboutMe from './pages/about-me-page.component';
import ProjectDetail from './pages/project-detail-page.component';

import Footer from './components/footer.component';

function App() {
  return (
    <div className="App-color">

      <Router basename={process.env.PUBLIC_URL}>

       
        <Routes>
          <Route path="/" element={<Home />} />



          <Route path="/works" element={<Works />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectType/:id" element={<ProjectDetail />} />
          <Route path="/companyprojects/:companyId" element={<Projects />} />
          <Route path="/companyprojects/:companyId/:companyProjectType/:projectId" element={<ProjectDetail />} />

          <Route path="*" element={<Navigate to ="/"/>} />
        </Routes>
        <br />
        <Footer />
        <NavBar/>
      </Router>


    </div>
  );
}

export default App;
