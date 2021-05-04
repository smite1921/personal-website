import React from "react";
import LinkedinLogo from "../logos/linkedin_logo";
import GithubLogo from "../logos/github_logo";
import EmailLogo from "../logos/email_logo";
import InstagramLogo from "../logos/instagram_logo";
import styles from "./social.module.css";

export default function Social() {

  return (
    <div className={styles.container}>
        <a href="https://www.linkedin.com/in/smit-patel-uoft/" style={{paddingLeft:'1rem'}} className={styles.logo}>
            <LinkedinLogo/>
        </a>
        <a href="https://github.com/smite1921" className={styles.logo}>
            <GithubLogo/>
        </a>
        <a href="mailto:smitp505@gmail.com" className={styles.logo}>
            <EmailLogo/>
        </a>
        <a href="https://www.instagram.com/smit._.p/" className={styles.logo}>
            <InstagramLogo/>
        </a>
    </div>
  );
}
