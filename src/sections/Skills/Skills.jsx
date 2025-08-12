import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (<secition  id="skills" className={styles.container}>
  <h1 className="sectionTitle" >Skills</h1>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="HTML" />
    <SkillList src={checkMarkIcon} skill="CSS" />
    <SkillList src={checkMarkIcon} skill="JavaScript" />
    <SkillList src={checkMarkIcon} skill="Node" />
  </div>
  <hr/>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="React" />
    <SkillList src={checkMarkIcon} skill="TailWind CSS" />
  </div>
  <hr/>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Git" />
    <SkillList src={checkMarkIcon} skill="Jest" />
    <SkillList src={checkMarkIcon} skill="BootStrap" />
    </div>
  <hr/>
    </secition> 
  );
}


export default Skills