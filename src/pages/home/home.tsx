import React from "react"
import { useInView } from "react-intersection-observer"
import Nav from "../../components/nav/nav"
import Welcome from "../../components/welcome/welcome"
import * as styles from "./home.module.css"
import "animate.css"

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div id="home" className={styles.container}>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={`${styles.home}`}>
        <div className={styles.text}>
          <div
            ref={ref}
            className={inView ? "animate__animated animate__fadeInLeft" : ""}
            style={{
              display: "flex",
              flexGrow: 1,
              animationDuration: "1.5s",
              opacity: inView ? 1 : 0
            }}
          >
            <span className={`${styles.welcome}`}>
              <Welcome />
            </span>
          </div>
        </div>

        <div className={styles.image}></div>
      </div>
    </div>
  )
}
