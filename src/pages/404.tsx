import React from "react";
import { Header, COLOR, FONT } from "@/components/ui";
import { HeaderUnderline } from "@/components/layout";
import * as styles from "./404.module.css";

export default function NotFound() {
    return (
      <div id='not-found' className={styles.container}>

        <div className={styles.block}>
            <div className='xxl'>
                <Header title='404' color={COLOR.WHITE} font={FONT.CAL_MED}/>
            </div>
            <div className='cal-l'>
                <Header title='page not found' color={COLOR.WHITE} font={FONT.CAL_MED}/>
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
            <title>404 - Page Not Found | Smit Patel</title>
            <meta name="description" content="Page not found" />
        </>
    );
}