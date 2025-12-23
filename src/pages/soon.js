import React from "react";
import Header from "../components/header/header";
import HeaderUnderline from "../components/header_underline/header_underline"
import * as styles from "./404.module.css";
import {COLOR, FONT} from "../styles/constants";

export default function Soon() {
    return (
      <div id='soon' className={styles.container}>

        <div className={styles.block}>
            <div className='xxl'>
                <Header title='coming soon' color={COLOR.WHITE} font={FONT.CAL_MED}/>
            </div>
            <div className='cal-l'>
                <Header title='sorry, this page is not ready yet.' color={COLOR.WHITE} font={FONT.CAL_MED}/>
                <div className={styles.link}>
                    <HeaderUnderline flag={true} title='back to homepage' color={COLOR.GREEN} link='/'/>
                </div>
            </div>

        </div>


      </div>
    );
}

export function Head() {
    return (
        <>
            <title>Coming Soon | Smit Patel</title>
            <meta name="description" content="This page is coming soon" />
        </>
    );
}