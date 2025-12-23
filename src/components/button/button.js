import React from "react";
import * as styles from "./button.module.css";

export default function Button({ text, link }) {
    return(
        <a href={link} className={styles.button}>
            <span data-text={text} className={styles.block}/>{text}
        </a>
    );
}