import React, { useState } from "react"
import * as styles from "./Sidebar.module.css"
import HeaderUnderline from "../HeaderUnderline"
import { CloseLogo } from "@/components/icons"
import { COLOR } from "@/styles/constants"
import Ham from "../Nav/Ham"

export default function Sidebar() {
  const [display, setDisplay] = useState("100%")

  return (
    <div>
      <span className={styles.mobile} onClick={() => setDisplay("0%")}>
        <Ham />
      </span>
      <aside>
        <div
          className={styles.sidebar}
          style={{ transform: `translateX(${display})` }}
        >
          <div className={styles.close} onClick={() => setDisplay("100%")}>
            <span className={styles.button}>
              <CloseLogo />
            </span>
          </div>
          <nav className={`${styles.container} cal-l`}>
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
            <HeaderUnderline
              title="contact"
              color={COLOR.PEACH}
              link="contact"
            />
          </nav>
        </div>
      </aside>
    </div>
  )
}
