import React from "react";
import Header from "../header/header";
import styles from "./timeline.module.css";
import {COLOR, FONT} from "../../styles/constants";

export default function Timeline({activeIndex, hoverIndex}) {
    const array = Array.from(Array(170).keys());
    const grid = array.map(index => {
        if (index === 21) {
            return <div key={index} style={{border:'0.25px solid #efedec'}}></div>;
        }
        else if ([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].includes(index)) {
            return <div key={index} style={{borderLeft:'0.25px solid #efedec',borderTop:'0.25px solid #efedec',borderBottom:'0.25px solid #efedec'}}></div>;
        }
        else if ([41,61,83,102,121,143,145,147,169].includes(index)) {
            return <div key={index} style={{borderLeft:'0.25px solid #efedec',borderRight:'0.25px solid #efedec',borderBottom:'0.25px solid #efedec'}}></div>;
        }
        return <div key={index} style={{borderLeft:'0.25px solid #efedec',borderBottom:'0.25px solid #efedec'}}></div>;
    })
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
      default:
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
      default:
        break;
    }


    return (
            <div style={{height:'100%'}}>

                <div className={styles.timeline}>
    
                    {grid}

                    <div style={{backgroundColor:`${color0}`, transition:'background-color 0.2s'}} className={styles.school}>
                    </div>
                    
                    <div style={{backgroundColor:`${color1}`,transition:'background-color 0.2s'}} className={styles.sw}>
                    </div>

                    <div style={{backgroundColor:`${color2}`, transition:'background-color 0.2s'}} className={styles.it}>
                    </div> 
                
                </div>

              <div className={styles.dates}>


                <div style={{flexGrow:'1'}}>
                  <Header title='2017' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='____' color={COLOR.BACKGROUND} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='2018' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='____' color={COLOR.BACKGROUND} font={FONT.MONO}/>
                </div>

                <div style={{ flexGrow:'1'}}>
                  <Header title='2019' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='____' color={COLOR.BACKGROUND} font={FONT.MONO}/>
                </div>
                
                <div style={{flexGrow:'1'}}>
                  <Header title='2020' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='____' color={COLOR.BACKGROUND} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='2021' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='____' color={COLOR.BACKGROUND} font={FONT.MONO}/>
                </div>

                <div style={{flexGrow:'1'}}>
                  <Header title='2022' color={COLOR.WHITE} font={FONT.MONO}/>
                </div>
                
              </div>
            </div>

    );
}