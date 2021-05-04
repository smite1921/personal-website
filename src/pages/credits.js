import React from "react";
import Header from "../components/header/header";
import styles from "./credits.module.css";
import {COLOR, FONT} from "../styles/constants";

export default function Credits() {
    return (
      <div id='credits' className={styles.container}>
        <div className={styles.title}>
          <Header title='credits' color={COLOR.WHITE} font={FONT.CAL_MED}/>
        </div>
        

        
        <div className={styles.links}>
            <Header title='cn tower skyline: designed by freepik' color={COLOR.PURPLE} font={FONT.CAL_MED} link='http://www.freepik.com'/>
            <Header title='helicopter & clouds: designed by pch.vector / freepik' color={COLOR.GREEN} font={FONT.CAL_MED} link='http://www.freepik.com'/>
            <Header title='social media & android icons: designed by icon monstr' color={COLOR.BLUE} font={FONT.CAL_MED} link='https://iconmonstr.com/'/>
            <br></br>
            <Header title='back to home page' color={COLOR.YELLOW} font={FONT.CAL_MED} link='/'/>

        </div>
      </div>
    );
}