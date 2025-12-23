import React from "react"
import { Nav } from "@/components/layout"
import { Home } from "@/features/home"
import { Experience } from "@/features/experience"
import { Projects as Project } from "@/features/projects"
import { Contact } from "@/features/contact"
import * as styles from "./index.module.css"

export default function Index() {
  return (
    <div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <Home />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export { default as Head } from "@/components/Head"
