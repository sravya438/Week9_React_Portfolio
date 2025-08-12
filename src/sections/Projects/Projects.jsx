import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from './ProjectCard';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link='https://sravya438.github.io/Week2_Challenge/'
            h3="Learn HTML&CSS"
            p="LMS Portal"/>
            <ProjectCard src={freshBurger} link='https://sravya438.github.io/Week5_WeatherDashboard/'
            h3="Howzz the Weather"
            p="Weather Portal"/>
        </div>
    </section>
    
  );
}

export default Projects