import styles from './HeroStyles.module.css';
import twitterLight from '../assets/twitter-light.svg';
import githubLight from '../assets/github-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';

function Hero({ heroImg, username, development, Twitter, Github, Linkedin, description, CV }) {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt={`Profile picture of ${username}`}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          {username} 
        </h1>
        <h2 className={styles.title}>{development}</h2>
        <div className={styles.socials}>
          <a href={Twitter} target="_blank" rel="noopener noreferrer">
            <img src={twitterLight} alt="Twitter icon" />
          </a>
          <a href={Github} target="_blank" rel="noopener noreferrer">
            <img src={githubLight} alt="Github icon" />
          </a>
          <a href={Linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinLight} alt="LinkedIn icon" />
          </a>
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
