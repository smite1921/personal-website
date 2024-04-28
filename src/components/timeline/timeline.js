import React from "react"
import Header from "../header/header"
import styles from "./timeline.module.css"
import { COLOR, FONT } from "../../styles/constants"

export default function Timeline({
  activeIndex,
  hoverIndex,
  setHover,
  setActive,
  hover,
}) {
  const array = Array.from(Array(222).keys())
  const grid = array.map(index => {
    // top right corner
    if (index === 21) {
      return <div key={index} style={{ border: "0.25px solid #efedec" }}></div>
      // top row minus top right corner
    } else if (
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ].includes(index)
    ) {
      return (
        <div
          key={index}
          style={{
            borderLeft: "0.25px solid #efedec",
            borderTop: "0.25px solid #efedec",
            borderBottom: "0.25px solid #efedec",
          }}
        ></div>
      )
      // right edge
    } else if (
      [41, 63, 82, 104, 124, 146, 167, 189, 199, 221].includes(index)
    ) {
      return (
        <div
          key={index}
          style={{
            borderBottom: "0.25px solid  #efedec",
            borderLeft: "0.25px solid  #efedec",
            borderRight: "0.25px solid  #efedec",
          }}
        ></div>
      )
    }
    // remaining boxes
    return (
      <div
        key={index}
        style={{
          borderLeft: "0.25px solid #efedec",
          borderBottom: "0.25px solid #efedec",
        }}
      ></div>
    )
  })

  const colors = ["#b8b8b6", "#b8b8b6", "#b8b8b6", "#b8b8b6", "#b8b8b6"]

  // Update colors based on hoverIndex and activeIndex
  if (hoverIndex !== -1) {
    colors[hoverIndex] = "#efedec"
  }

  if (activeIndex !== -1) {
    colors[activeIndex] = "#ecc20f"
  }

  const startYear = 2017
  const endYear = 2027
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  )

  return (
    <div style={{ height: "100%" }}>
      <div className={styles.timeline}>
        {grid}

        <div
          style={{
            backgroundColor: `${colors[4]}`,
            transition: "background-color 0.2s",
          }}
          className={styles.shopifyFt}
          onClick={() => setActive(4)}
          onMouseOver={() => hover(4)}
          onMouseLeave={() => setHover(-1)}
        />

        <div
          style={{
            backgroundColor: `${colors[3]}`,
            transition: "background-color 0.2s",
          }}
          className={styles.shopifyIntern}
          onClick={() => setActive(3)}
          onMouseOver={() => hover(3)}
          onMouseLeave={() => setHover(-1)}
        />

        <div
          style={{
            backgroundColor: `${colors[2]}`,
            transition: "background-color 0.2s",
          }}
          className={styles.gmInfo}
          onClick={() => setActive(2)}
          onMouseOver={() => hover(2)}
          onMouseLeave={() => setHover(-1)}
        />

        <div
          style={{
            backgroundColor: `${colors[1]}`,
            transition: "background-color 0.2s",
          }}
          className={styles.gmIt}
          onClick={() => setActive(1)}
          onMouseOver={() => hover(1)}
          onMouseLeave={() => setHover(-1)}
        />

        <div
          style={{
            backgroundColor: `${colors[0]}`,
            transition: "background-color 0.2s",
          }}
          className={styles.school}
          onClick={() => setActive(0)}
          onMouseOver={() => hover(0)}
          onMouseLeave={() => setHover(-1)}
        />
      </div>

      <div className={styles.dates}>
        {years.map(year => (
          <div key={year} style={{ flexGrow: "1" }}>
            <Header
              title={year.toString()}
              color={COLOR.WHITE}
              font={FONT.MONO}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
