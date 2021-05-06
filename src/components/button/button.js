import React from "react";
import styles from "./button.module.css";

export default function Button({ text, link }) {
    return(
        <a href={link} className={styles.button}>
            <span data-text={text} className={styles.block}/>{text}
        </a>
    );
}