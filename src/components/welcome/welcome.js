import React from "react"
import Header from "../header/header"
import Button from "../button/button"
import { COLOR, FONT } from "../../styles/constants"
import styles from "./welcome.module.css"

export default function Welcome() {
  return (
    <div style={{ margin: "auto" }}>
      <div className="s">
        <Header
          title="hello world! my name is"
          color={COLOR.WHITE}
          font={FONT.MONO}
        />
      </div>

      <div className="cal-xl">
        <div className={styles.name}>
          <Header title='"' color={COLOR.WHITE} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="S" color={COLOR.YELLOW} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="m" color={COLOR.ORANGE} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="i" color={COLOR.GREEN} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="t" color={COLOR.PURPLE} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header
            title="-"
            color={COLOR.BACKGROUND}
            font={FONT.CAL_SEMIBOLD_I}
          />
        </div>
        <div className={styles.name}>
          <Header title="P" color={COLOR.PINK} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="a" color={COLOR.BLUE} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="t" color={COLOR.YELLOW} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="e" color={COLOR.PEACH} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title="l" color={COLOR.GREEN} font={FONT.CAL_SEMIBOLD_I} />
        </div>
        <div className={styles.name}>
          <Header title='"' color={COLOR.WHITE} font={FONT.CAL_SEMIBOLD_I} />
        </div>
      </div>

      <div className="cal-l">
        <Header title="san francisco, california" color={COLOR.BLUE} font={FONT.CAL_MED} />
        <Header
          title="software developer"
          color={COLOR.PINK}
          font={FONT.CAL_MED}
        />
      </div>

      <div className={`${styles.textbox} xs`}>
        <Header title="/*" color={COLOR.GREEN} font={FONT.AVENIR_BOOK} />

        <div style={{ display: "flex" }}>
          <Header
            title="&nbsp;&nbsp;"
            color={COLOR.GREEN}
            font={FONT.AVENIR_BOOK}
          />
          <Header
            title={
              <>
                Welcome to my website! I'm a Software Engineer at DoorDash, formerly at Shopify. I graduated from the University of Toronto with a double major in Computer Science and Physics, and I love building apps such as{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.smitpatel.enigmamachine"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Enigma Machine simulator
                </a>{" "}
                and{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.smitpatel.g1app"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  G1 Ready
                </a>
              </>
            }
            color={COLOR.GREEN}
            font={FONT.AVENIR_BOOK}
          />
        </div>
        <Header title="*/" color={COLOR.GREEN} font={FONT.AVENIR_BOOK} />
      </div>

      <div className="m">
        <Button text="resume" link="/resume.pdf" />
      </div>
    </div>
  )
}
