import React from "react"
import * as styles from "./Button.module.css"

interface ButtonProps {
  text: string
  link: string
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <a href={link} className={styles.button}>
      <span data-text={text} className={styles.block} />
      {text}
    </a>
  )
}
