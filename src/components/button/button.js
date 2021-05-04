import React from "react";
import styles from "./button.module.css";
import {COLOR,SIZE,FONT} from "../../styles/constants";

export default function Button({ text, link }) {
    return(
        <a href={link} className={styles.button}>
            <span className={styles.block}/>{text}
        </a>
    );
}