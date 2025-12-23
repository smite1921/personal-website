import React from "react"
import { Header, COLOR, FONT } from "@/components/ui"
import * as styles from "./credits.module.css"

export default function Credits() {
  return (
    <div id="credits" className={styles.container}>
      <div className={styles.title}>
        <Header title="credits" color={COLOR.WHITE} font={FONT.CAL_MED} />
      </div>

      <div className={styles.links}>
        <Header
          title="cn tower skyline: designed by freepik"
          color={COLOR.PURPLE}
          font={FONT.CAL_MED}
          link="https://www.freepik.com/"
        />
        <Header
          title="helicopter & clouds: designed by pch.vector / freepik"
          color={COLOR.GREEN}
          font={FONT.CAL_MED}
          link="https://www.freepik.com"
        />
        <Header
          title="social media & android icons: designed by icon monstr"
          color={COLOR.BLUE}
          font={FONT.CAL_MED}
          link="https://iconmonstr.com/"
        />
        <br></br>
        <Header
          title="back to home page"
          color={COLOR.YELLOW}
          font={FONT.CAL_MED}
          link="/"
        />
      </div>
    </div>
  )
}

export function Head() {
  return (
    <>
      <title>Credits | Smit Patel</title>
      <meta
        name="description"
        content="Credits and attributions for assets used on this website"
      />
    </>
  )
}
