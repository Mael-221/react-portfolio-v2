import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import {useTheme} from '../../common/ThemeContext'

function Skills() {
  const {theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;  
  return (
    <section 
    id='skills'
    className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Python'/>
        <SkillList src={checkMarkIcon} skill='R'/>
        <SkillList src={checkMarkIcon} skill='SQL'/>
        <SkillList src={checkMarkIcon} skill='C++'/>
        <SkillList src={checkMarkIcon} skill='Java'/>
    </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Data Visualization'/>
        <SkillList src={checkMarkIcon} skill='Machine Learning'/>
        <SkillList src={checkMarkIcon} skill='Deep Learning'/>
        <SkillList src={checkMarkIcon} skill='NLP'/>
        <SkillList src={checkMarkIcon} skill='LLM'/>
    </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Hadoop'/>
        <SkillList src={checkMarkIcon} skill='AWS'/>
        <SkillList src={checkMarkIcon} skill='Spark'/>
        <SkillList src={checkMarkIcon} skill='Kafka'/>
    </div>
    </section>
  )
}

export default Skills