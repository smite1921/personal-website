import React from "react";
import Header from "../header/header";
import Button from "../button/button";
import {COLOR,SIZE,FONT} from "../../styles/constants";
import styles from "./welcome.module.css";

export default function Welcome() {
    return (
        <div style={{margin:'auto'}}> 
            <div className='s'>
                <Header title='hello world! my name is' color={COLOR.WHITE} font={FONT.MONO}/>
            </div>

            <div className='cal-xl'>
                <div className={styles.name}>
                    <Header title='"' color={COLOR.WHITE} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='S' color={COLOR.YELLOW} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='m' color={COLOR.ORANGE} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='i' color={COLOR.GREEN} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='t' color={COLOR.PURPLE} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title="-" color={COLOR.BACKGROUND} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='P' color={COLOR.PINK} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='a' color={COLOR.BLUE} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='t' color={COLOR.YELLOW} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='e' color={COLOR.PEACH} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='l' color={COLOR.GREEN} font={FONT.CAL_SEMIBOLD_I}/>
                </div>
                <div className={styles.name}>
                    <Header title='"' color={COLOR.WHITE} font={FONT.CAL_SEMIBOLD_I}/>
                </div>

            </div>

            <div className='cal-l'>
                <Header title='toronto canada' color={COLOR.BLUE} font={FONT.CAL_MED}/>
                <Header title='software developer' color={COLOR.PINK} font={FONT.CAL_MED}/>
            </div>

            <div className={`${styles.textbox} xs`}>
                <Header title='/*' color={COLOR.GREEN}  font={FONT.AVENIR_BOOK}/>
                <Header title='I am currently a student studying computer science and physics at the University of Toronto.
                                I am in my third year and I expect to graduate in the summer of 2022. I have had
                                experience as an Infotainment Android Developer at General Motors from May 2019 - December 2020.
                                At the moment I am currently seeking internships for Fall 2021.' 
                color={COLOR.GREEN} font={FONT.AVENIR_BOOK}/>
                <Header title='*/' color={COLOR.GREEN} font={FONT.AVENIR_BOOK}/>
            </div>
            
            <div className='m'>
                <Button text='resume' link='/resume.pdf'/>
            </div>

            

        </div>
    );
}