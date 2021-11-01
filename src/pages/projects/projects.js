import React from "react";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import AndroidLogo from "../../components/logos/android_logo";
import TagLogo from "../../components/logos/tag_logo";
import MazeLogo from "../../components/logos/maze_logo";
import styles from "./projects.module.css";
import {COLOR, FONT} from "../../styles/constants";
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

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

        <ScrollAnimation style={{display:'flex', flexGrow:1}} duration='1.5' delay='1.5' animateOnce={true} animateIn='animate__slideInUp'>
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
              name='maze generators' 
              logo={<MazeLogo/>}
              link='https://mazegenerators.gatsbyjs.io/'
              github='https://github.com/smite1921/maze-generators'
              platform='Website'
              description='A website to showcase popular maze generation algorithms.' 
              tech='HTML, CSS, JavaScript, React, Gatsby' />

            <ProjectSection 
              name='african impact' 
              logo={<TagLogo/>}
              link='/soon'
              github='https://github.com/smite1921/african-impact-challenge'
              platform='Web Application (Jamstack)'
              description='This project is a web application that provides a platform for participants in the African Impact Challenge. Participants will be able to use the platform to communicate with their peers, and access e-learning resources. The application was made so that participants have an integrated experience between the e-learning and community aspects of the African Impact Challenge.'
              tech='HTML, CSS, JavaScript, React, Firebase, NodeJS'/>

          </div>
        </ScrollAnimation>


      <div className={styles.navBottom}>
        <Nav/>
      </div>

      </div>

      
    );
  }