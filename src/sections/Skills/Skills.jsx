import styles from './SkillsStyles.module.css';
import pythonIcon from '../../assets/python-icon.svg';
import rIcon from '../../assets/r-icon.svg';
import sqlIcon from '../../assets/sql-icon.png';
import cppIcon from '../../assets/cpp-icon.svg';
import javaIcon from '../../assets/java-icon.svg';
import dataVizIcon from '../../assets/plot.png';
import mlIcon from '../../assets/machine-learning.gif';
import dlIcon from '../../assets/deep-learning-icon.png';
import nlpLight from '../../assets/nlp-light.png';
import nlpDark from '../../assets/nlp-dark.png';
import huggingIcon from '../../assets/icons8-hugging-face.svg';
import hadoopIcon from '../../assets/icons8-hadoop-distributed-file-system.svg';
import awsIcon from '../../assets/aws-icon.svg';
import sparkIcon from '../../assets/spark-icon.jpeg';
import kafkaIcon from '../../assets/apache-kafka-icon.png';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
  const {theme, toggleTheme} = useTheme();
  const skillsData = [
    { icon: pythonIcon, title: 'Python' },
    { icon: rIcon, title: 'R' },
    { icon: sqlIcon, title: 'SQL' },
    { icon: cppIcon, title: 'C++' },
    { icon: javaIcon, title: 'Java' },
    { icon: dataVizIcon, title: 'Data Visualization' },
    { icon: mlIcon, title: 'Machine Learning' },
    { icon: dlIcon, title: 'Deep Learning' },
    { icon: theme === 'light' ? nlpLight : nlpDark, title: 'NLP' },
    { icon: huggingIcon, title: 'Hugging Face' },
    { icon: hadoopIcon, title: 'Hadoop' },
    { icon: awsIcon, title: 'AWS' },
    { icon: sparkIcon, title: 'Spark' },
    { icon: kafkaIcon, title: 'Kafka' },
  ];
  return (
    <section id='skills' className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillsGrid}>
        {skillsData.map(skill => (
          <div key={skill.title} className={styles.skillCard}>
            <img src={skill.icon} alt={`${skill.title} icon`} className={styles.skillIcon} />
            <h3 className={styles.skillTitle}>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
