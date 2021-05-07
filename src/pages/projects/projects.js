import React from "react";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import AndroidLogo from "../../components/logos/android_logo";
import TagLogo from "../../components/logos/tag_logo";
import MazeLogo from "../../components/logos/maze_logo";
import styles from "./projects.module.css";
import {COLOR, FONT} from "../../styles/constants";

function ProjectSection({ name, logo, link, github, platform, description, tech }) {
  return(
      <div className={styles.projectSection}>
                
        <div className={`${styles.projectTitle} cal-l`}>
            
          <div className={styles.projectName}>
            <Header title={name} color={COLOR.WHITE} font={FONT.CAL_MED}/>
          </div>

          <div className={styles.projectLogo}>
            {logo}
          </div>

        </div>

        <div className={`${styles.projectContent} xxs`}>
          <div className={styles.projectContentHeader}>
            <div className={styles.projectContentPlatform}>
              <b><Header title="Platform" font={FONT.MONO} color={COLOR.WHITE}/></b> 
              <Header title={`: ${platform}`} font={FONT.MONO} color={COLOR.WHITE}/> 
            </div>
            <b><Header title='Links:' font={FONT.MONO} color={COLOR.WHITE}/> </b>
            <div className={`${styles.projectContentLinks}`}>
                <ul>
                  <li> <Header title={link !== '/soon' ? 'Project Link' : 'Project Link - Coming Soon'} font={FONT.MONO} color={COLOR.WHITE} link={link}/> </li>
                  <li> <Header title={github !== '/soon' ? 'Github Link' : 'Github Link - Coming Soon'} font={FONT.MONO} color={COLOR.WHITE} link={github}/> </li>
                </ul>
            </div>

          </div>
          <div className={styles.projectContentBody}>
            <b><Header title='Description: ' font={FONT.MONO} color={COLOR.WHITE}/> </b>
            <Header title={description} font={FONT.MONO} color={COLOR.WHITE}/> 
            
          </div>
          <div className={styles.projectContentFooter}>
            <b><Header title='Technologies Used:' font={FONT.MONO} color={COLOR.WHITE}/></b>
            <Header title={tech} font={FONT.MONO} color={COLOR.WHITE}/>
          </div>
        </div>

      </div>
  );
}

export default function Project() {

    return (
      <div id='project' className={styles.container}>
        
        <div className={styles.nav}>
          <Nav/>
        </div>

        <div className={`${styles.title} xxl`}>
          <Header title='projects' color={COLOR.WHITE} font={FONT.CAL_MED}/>
        </div>

          <div className={styles.projects}>
      
          <ProjectSection 
            name='enigma machine' 
            logo={<AndroidLogo/>} 
            link='https://play.google.com/store/apps/details?id=com.smitpatel.enigmamachine' 
            github='https://github.com/smite1921/enigma_machine' 
            platform='Android (Mobile)' 
            description='The Enigma Machine is a physical cryptographic device that was used extensively by the German military during World War II. I made an android app simulating the M3 version of the machine.' 
            tech='Java, Android, Adobe Illustrator'/>

          <ProjectSection 
            name='personal website' 
            logo={<TagLogo/>}
            link='https://smitpatel.gtsb.io/'
            github='https://github.com/smite1921/personal-website'
            platform='Web'
            description='A website to display my skills, experience, and personal projects (this is the website you currently are on).'
            tech='HTML, CSS, JavaScript, React, Gatsby, Adobe Illustrator'/>

          <ProjectSection 
            name='maze solvers' 
            logo={<MazeLogo/>}
            linkName='Coming Soon ...'
            link='/soon'
            github='/soon'
            platform='Web (In Progress)'
            description='A website to showcase various maze generation and maze solving algorithms.' 
            tech='HTML, CSS, JavaScript' />

        </div>

      <div className={styles.navBottom}>
        <Nav/>
      </div>

      </div>

      
    );
  }