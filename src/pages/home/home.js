import React from "react";
import Nav from "../../components/nav/nav";
import Welcome from "../../components/welcome/welcome";
import Social from "../../components/social/social"
import styles from "./home.module.css";

export default function Home() {
    return (
      <div id='home' className={styles.container}>
        
        <div className={styles.nav}>
          <Nav/>
        </div>
  
        <div className={styles.home}>
          <div className={styles.text}>
            
            <span className={styles.welcome}>
              <Welcome/>
            </span>
            
            <div className={styles.social}>
              <Social/>
            </div>
          
          </div>

          <div className={styles.image}>
          </div>
          
        </div>
      </div>
    );
  }