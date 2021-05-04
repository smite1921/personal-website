import React from "react";
import styles from "./header_underline.module.css";
import {Link} from "react-scroll";
import {COLOR} from "../../styles/constants";

export default function HeaderUnderline({ title, color, link}) {

    let styleClass;
    if (color === COLOR.BLUE) {
        styleClass = styles.titleBlue;
    }
    else if (color === COLOR.YELLOW) {
        styleClass =  styles.titleYellow;
    }
    else if (color === COLOR.PURPLE) {
        styleClass =  styles.titlePurple;
    }
    else if (color === COLOR.PEACH) {
        styleClass =  styles.titlePeach;
    }

    console.log(styleClass);
    return (
        <div className={styles.container}>
            <Link activeClass="active" to={link} spy={true} smooth={true} duration={1000} className={`${styleClass} ${styles.link}`}> {title} </Link>
        </div>
    );
}