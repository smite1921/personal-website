import React from "react"
import HeaderUnderline from "../HeaderUnderline"
import { SmitLogo } from "@/components/icons"
import Sidebar from "../Sidebar"
import * as styles from "./Nav.module.css"
import { COLOR } from "@/styles/constants"

export default function Nav() {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.logoContainer}>
          <span className={styles.logo}>
            <SmitLogo />
          </span>
        </span>

        <span className={styles.gap}></span>

        <span className={`${styles.sectionContainer} m`}>
          <HeaderUnderline title="home" color={COLOR.BLUE} link="home" />
          <HeaderUnderline
            title="experience"
            color={COLOR.YELLOW}
            link="experience"
          />
          <HeaderUnderline
            title="projects"
            color={COLOR.PURPLE}
            link="project"
          />
          <HeaderUnderline title="contact" color={COLOR.PEACH} link="contact" />
        </span>

        <Sidebar />
      </div>
    </div>
  )
}
