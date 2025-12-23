import React, { useEffect, useState } from "react";
import * as styles from "./header_underline.module.css";
import {COLOR} from "../../styles/constants";

export default function HeaderUnderline({ title, color, link, flag = false}) {
    const [ScrollLink, setScrollLink] = useState(null);

    useEffect(() => {
        import("react-scroll").then(module => {
            setScrollLink(() => module.Link);
        });
    }, []);

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
    else if (color === COLOR.GREEN) {
        styleClass = styles.titleGreen;
    }

    if (flag) {
        return (
            <div className={styles.container}>
                <a href={link} className={`${styleClass} ${styles.link}`}> {title} </a>
            </div>
        );
    }
    else if (ScrollLink) {
        return (
            <div className={styles.container}>
                <ScrollLink activeClass="active" to={link} spy={true} smooth={true} duration={1000} className={`${styleClass} ${styles.link}`}> {title} </ScrollLink>
            </div>
        );
    }
    else {
        return (
            <div className={styles.container}>
                <a href={`#${link}`} className={`${styleClass} ${styles.link}`}> {title} </a>
            </div>
        );
    }
}