import React, {useState} from "react";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Stack from "../../components/stack/stack";
import Timeline from "../../components/timeline/timeline";
import styles from "./experience.module.css";
import {COLOR, FONT} from "../../styles/constants";

export default function Experience() {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(-1);

    const historyData = [
      {
        general: 'Program: Computer Science & Physics',
        date: 'Duration: Sept 2017 - April 2022 (Expected)',
      },
      {
        general: 'Role: Site Services Technician (intern)',
        date: 'Duration: Sept 2018  - Dec 2018',
        stack: 'Technologies Used: '
      },
      {
        general: 'Role: Android Software Engineer (intern)',
        date: 'Duration: May 2019  - Dec 2019',
        stack: 'Technologies Used: Java, Android, GIT, JIRA, Gerrit'
      }
    ]

    let color0 = '#b8b8b6';
    let color1 = '#b8b8b6';
    let color2 = '#b8b8b6';
    
    switch (hoverIndex) {
      case -1:
        break;
      case 0:
        color0 = '#efedec';
        break;
      case 1:
        color1 = '#efedec';
        break;
      case 2:
        color2 = '#efedec';
        break;
    }

    switch (activeIndex) {
      case 0:
        color0 = '#ecc20f';
        break;
      case 1:
        color1 = '#ecc20f';
        break;
      case 2:
        color2 = '#ecc20f';
        break;
    }

    const hover = (index) => {
      if (index != activeIndex) {
        setHoverIndex(index);
      }
    }

    return (
      <div id='experience' className={styles.container}>
        
        <div className={styles.nav}>
          <Nav/>
        </div>

        <div className={styles.skills}>
          
          
          <div className={styles.skillsText}>

            <div className={styles.textContainer}>

              <div className={styles.l}>
                <Header title='about me' color={COLOR.BLACK} font={FONT.CAL_MED}/>
              </div>


              <div className={styles.skillsTextbox}>
                <Header title='My passion for software development started in high school when I 
                              took my first computer programming course. Since then, I have
                              explored various areas in the field through internships and personal
                              projects. Here is a brief list of things I’m currently interested in:' 
                color={COLOR.BLACK} font={FONT.AVENIR_MED}/>

                <div className={styles.bullet}>
                  <div className={styles.bulletLeft}>
                    <Header title='&#9656; Android App Development' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                    <Header title='&#9656; Web Development' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                    <Header title='&#9656; iOS Development' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                  </div>
                  <div className={styles.bulletRight}>
                    <Header title='&#9656; Algorithms and Data Structures' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                    <Header title='&#9656; Computational Physics' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                    <Header title='&#9656; Crypotgraphy' color={COLOR.BLACK} font={FONT.AVENIR_MED}/>
                  </div>
                </div>
                              
              
              </div>

            </div>

          </div>

          <div className={styles.skillsImage}>
            <Stack/>
          </div>

        </div>

        <div className={styles.experience}>
          <div className={styles.experienceTitle}>
            <div className={styles.l}>
              <Header title='experience' color={COLOR.BLACK} font={FONT.CAL_MED}/>
            </div>
          </div>

          <div className={styles.experienceBox}>
            
            <div className={styles.experienceBoxTimeline}>
            
              <Timeline activeIndex={activeIndex} hoverIndex={hoverIndex}/>

            </div>

            <div className={styles.experienceBoxHistory}>
              <div className={`${styles.l} ${styles.experienceBoxTitle}`}>
                <Header title='HISTORY' color={COLOR.YELLOW} font={FONT.CAL_MED}/>
              </div>
        
              <ul style={{paddingInlineStart:'2rem'}} className={`${styles.xs} ${styles.experienceBoxList}`}>
                <li onClick={() => setActiveIndex(0)} onMouseOver={() => hover(0)} onMouseLeave={() => setHoverIndex(-1)} style={{color:`${color0}`, transition:'color 0.1s'}}>
                   <Header title='University of Toronto' font={FONT.MONO}/> 
                </li>
                <li onClick={() => setActiveIndex(1)} onMouseOver={() => hover(1)} onMouseLeave={() => setHoverIndex(-1)} style={{color:`${color1}`, transition:'color 0.1s'}}> 
                  <Header title='General Motors - IT' font={FONT.MONO}/> 
                </li>
                <li onClick={() => setActiveIndex(2)} onMouseOver={() => hover(2)} onMouseLeave={() => setHoverIndex(-1)} style={{color:`${color2}`, transition:'color 0.1s'}}>
                  <Header title='General Motors - Infotainment' font={FONT.MONO}/> 
                </li>
              </ul>
            </div>

            <div className={`${styles.experienceBoxInfo} ${styles.xs}`}>
                <Header title={historyData[activeIndex].general} color={COLOR.WHITE} font={FONT.MONO}/>
                <Header title={historyData[activeIndex].date} color={COLOR.WHITE} font={FONT.MONO}/>
                <Header title='' color={COLOR.WHITE} font={FONT.MONO}/>
            </div>
          


          </div>

        </div>

        <div className={styles.navBottom}>
          <Nav/>
        </div>

      </div>
    );
  }