import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXing } from '@fortawesome/free-brands-svg-icons';
import styles from "../assets/css/Footer.module.css"; // Import styles specific to Footer

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>Website created by <a href="https://zerocool989.github.io/porfolio-project-1/" target="_blank" rel="noopener noreferrer" className={styles.nameLink}>Almir Dumisic</a> - Full Stack Developer, Code Institute Student</span>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/almir-dumisic/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.xing.com/profile/Almir_Dumisic/web_profiles" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXing} size="2x" />
          </a>
          <a href="https://github.com/ZeroCool989" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
