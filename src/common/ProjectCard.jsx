import React from 'react';
import styles from './ProjectCard.module.css';
import { useTheme } from './ThemeContext';

function ProjectCard({ src, link, title, description, technologies, role }) {
  const { theme } = useTheme();
  const cardStyle = theme === 'light' ? styles.lightCard : styles.darkCard;

  return (
    <a href={link} className={`${styles.card} ${cardStyle}`} target="_blank" rel="noopener noreferrer">
      <div className={styles.header}>
        <img src={src} alt={`${title} Logo`} className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.technologies}><i className="fas fa-tools"></i> {technologies}</span>
        <span className={styles.role}><i className="fas fa-user"></i> {role}</span>
      </div>
    </a>
  );
}

export default ProjectCard;
