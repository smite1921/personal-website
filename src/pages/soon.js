import React from "react";
import Header from "../components/header/header";
import styles from "./soon.module.css";
import {COLOR, FONT} from "../styles/constants";

export default function Soon() {
    return (
      <div id='soon' className={styles.container}>
        <div className={styles.title}>
          <Header title='coming soon...' color={COLOR.WHITE} font={FONT.CAL_MED}/>
        </div>
        

        
        <div className={styles.links}>
            <Header title='sorry, this page is not ready yet.' color={COLOR.WHITE} font={FONT.CAL_MED}/>
            <br></br>
            <Header title='back to home page' color={COLOR.PINK} font={FONT.CAL_MED} link='/'/>

        </div>
      </div>
    );
}