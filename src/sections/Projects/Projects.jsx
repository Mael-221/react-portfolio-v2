import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import boatCompet from '../../assets/boatcompet.png'
import harmonyland from '../../assets/harmonyland.png'
import outlier from '../../assets/outlier.png'
import food from '../../assets/food.png'

function Projects() {
  return (
    <section id='sections' className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={boatCompet} 
            link={"https://github.com/Mael-221/Boat-Type-Classification-Challenge"}
            title={"Boat Classification"}
            description={"Kaggle Competitiion"}/>
             <ProjectCard 
            src={harmonyland} 
            link={"https://github.com/Mael-221/HarmonyLand"}
            title={"HarmonyLand"}
            description={"Drone Surveillance System"}/>
            <ProjectCard 
            src={outlier} 
            link={"https://github.com/Mael-221/ML-for-cybersecurity"}
            title={"ML for Cybersecurity"}
            description={"Use AI to identify cyber attack"}/>
            <ProjectCard 
            src={food} 
            link={"https://github.com/Mael-221/Restaurant-Recommender-System"}
            title={" Restaurant Recommendation"}
            description={"Restaurant recommendations for users"}/>
        </div>
    </section>
  )
}

export default Projects