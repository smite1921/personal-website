import React from "react";
import Nav from "../../components/nav/nav";
import Social from "../../components/social/social";
import Header from "../../components/header/header";
import SFSkyline from "../../components/sfskyline/sfskyline";
import * as styles from "./contact.module.css";
import {COLOR, FONT} from "../../styles/constants";

export default function Contact() {
    return (
      <div id='contact' className={styles.container}>
        
        <div className={styles.nav}>
          <Nav/>
        </div>
      
        <SFSkyline/>
        
        <div className={styles.bottom}>

          <div className={styles.mobile}>

            <div className={`${styles.title} cal-l`}>
              <Header title='contact' color={COLOR.WHITE} font={FONT.CAL_MED}/>
            </div>

            <div className={`${styles.body} m`}>
              <Header title='location: san francisco, california' color={COLOR.WHITE} font={FONT.AVENIR_MED}/>
              <Header title='email: smitp505@gmail.com' color={COLOR.WHITE} font={FONT.AVENIR_MED}/>
            </div>
            <div className={styles.links}>
              <Social/>
            </div>
          </div>

        </div>

        <div className={styles.footer}>
          <div className='xs'>
            <Header title={`this website was designed and made by smit patel.`} font={FONT.MONO} color={COLOR.WHITE}/> 
            <Header title='credits' link='/credits' font={FONT.MONO} color={COLOR.WHITE}/> 
          </div>
        </div>          

      </div>
    );
  }