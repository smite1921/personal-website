import React, { useEffect, useState, ComponentType } from "react"
import * as styles from "./HeaderUnderline.module.css"
import { COLOR, ColorType } from "@/styles/constants"

interface HeaderUnderlineProps {
  title: string
  color: ColorType
  link: string
  flag?: boolean
}

interface ScrollLinkProps {
  activeClass: string
  to: string
  spy: boolean
  smooth: boolean
  duration: number
  className: string
  children: React.ReactNode
}

export default function HeaderUnderline({
  title,
  color,
  link,
  flag = false,
}: HeaderUnderlineProps) {
  const [ScrollLink, setScrollLink] =
    useState<ComponentType<ScrollLinkProps> | null>(null)

  useEffect(() => {
    import("react-scroll").then(module => {
      setScrollLink(() => module.Link as ComponentType<ScrollLinkProps>)
    })
  }, [])

  let styleClass: string | undefined
  if (color === COLOR.BLUE) {
    styleClass = styles.titleBlue
  } else if (color === COLOR.YELLOW) {
    styleClass = styles.titleYellow
  } else if (color === COLOR.PURPLE) {
    styleClass = styles.titlePurple
  } else if (color === COLOR.PEACH) {
    styleClass = styles.titlePeach
  } else if (color === COLOR.GREEN) {
    styleClass = styles.titleGreen
  }

  if (flag) {
    return (
      <div className={styles.container}>
        <a href={link} className={`${styleClass} ${styles.link}`}>
          {" "}
          {title}{" "}
        </a>
      </div>
    )
  } else if (ScrollLink) {
    return (
      <div className={styles.container}>
        <ScrollLink
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          duration={1000}
          className={`${styleClass} ${styles.link}`}
        >
          {" "}
          {title}{" "}
        </ScrollLink>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <a href={`#${link}`} className={`${styleClass} ${styles.link}`}>
          {" "}
          {title}{" "}
        </a>
      </div>
    )
  }
}
