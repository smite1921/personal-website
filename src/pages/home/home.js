import React from "react"
import Nav from "../../components/nav/nav"
import Welcome from "../../components/welcome/welcome"
import styles from "./home.module.css"
import "animate.css"
import ScrollAnimation from "react-animate-on-scroll"

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={`${styles.home}`}>
        <div className={styles.text}>
          <ScrollAnimation
            duration="1.5"
            style={{ display: "flex", flexGrow: 1 }}
            animateOnce={true}
            animateIn="animate__fadeInLeft"
          >
            <span className={`${styles.welcome}`}>
              <Welcome />
            </span>
          </ScrollAnimation>
        </div>

        <div className={styles.image}></div>
      </div>
    </div>
  )
}
