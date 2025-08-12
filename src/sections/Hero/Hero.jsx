import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Computer_girl.jpeg';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
//import themeIcon from '../../assets/sun.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const {theme, toggleTheme}=useTheme();
    const themeIcon=theme==='light' ? sun:moon;
    const gitHubIcon=theme==='light' ? githubLight:githubDark;
    const linkedInIcon=theme==='light' ? linkedinLight:linkedinDark;
  return (
    
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Sravya" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" 
        onClick={toggleTheme}/>
        
        </div>
        <div className={styles.info}>
            <h1>Sravya 
                <br /> 
                Pavuluri</h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://github.com/dashboard" target='_blank'>
                    <img src={gitHubIcon} alt="" />
                </a>                
                <a href="https://www.linkedin.com/in/sai-sravya-pavuluri-95a31354/" target='_blank'>
                    <img src={linkedInIcon} alt="" />
                </a>                
            </span>
            <p className='styles.description'>Passionate fullstack developer using React Framework</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
        </section>
    );
  
}

export default Hero