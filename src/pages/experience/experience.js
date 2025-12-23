import React, { useState, useCallback } from "react"
import Nav from "../../components/nav/nav"
import Header from "../../components/header/header"
import Stack from "../../components/stack/stack"
import Timeline from "../../components/timeline/timeline"
import * as styles from "./experience.module.css"
import { useResizeDetector } from "react-resize-detector"
import { COLOR, FONT } from "../../styles/constants"
import "animate.css"

function CompanySection({
  role,
  roleTitle = "Role",
  department,
  departmentTitle = "Department",
  duration,
  notes,
}) {
  return (
    <div
      className="xxs"
      style={{
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <b>
          <Header title={roleTitle} color={COLOR.WHITE} font={FONT.MONO} />
        </b>
        <Header title={`: ${role}`} color={COLOR.WHITE} font={FONT.MONO} />
      </div>

      <div style={{ display: "flex", padding: "0.5rem 0" }}>
        <b>
          <Header
            title={departmentTitle}
            color={COLOR.WHITE}
            font={FONT.MONO}
          />
        </b>
        <Header
          title={`: ${department}`}
          color={COLOR.WHITE}
          font={FONT.MONO}
        />
      </div>

      <div style={{ display: "flex" }}>
        <b>
          <Header title="Duration" color={COLOR.WHITE} font={FONT.MONO} />
        </b>
        <Header title={`: ${duration}`} color={COLOR.WHITE} font={FONT.MONO} />
      </div>

      <b style={{ paddingTop: "0.5rem" }}>
        <Header title="Overview:" color={COLOR.WHITE} font={FONT.MONO} />
      </b>

      <div style={{ color: "white" }}>{notes}</div>
    </div>
  )
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(-1)
  const onResize = useCallback(() => {
    setActiveIndex(0)
  }, [])
  const { width, height, ref } = useResizeDetector({ onResize })

  let winWidth = -1

  if (typeof window !== "undefined") {
    winWidth = window.innerWidth
  }

  const companyData = [
    <CompanySection
      role="Student (undergrad)"
      department="Computer Science & Physics"
      departmentTitle="Program"
      duration="Sept 2017 - June 2023"
      notes={
        <ul>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Dean's List Fall 2017."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Entrance Scholarship $2000."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
        </ul>
      }
    />,

    <CompanySection
      role="IT Technician (intern)"
      department="IT - Site Services"
      duration="Sept 2018 - Dec 2018"
      notes={
        <ul>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Worked closely with the IT Site Services team providing support to 100+ employees for end-user devices (PC’s, printers, scanners, mobile phones, and tablets)."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Provided support to both engineering and management which reduced daily ticket volume by 15%."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Completed the system migration project from Ubuntu 14.04 to Ubuntu 16.04 for 50+ developers in 1 week."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Technologies Used: Windows CMD, Linux Shell, Remote Access Tools (SSH, Windows Remote Desktop), Cisco Routers & Switches, MS Office."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
        </ul>
      }
    />,

    <CompanySection
      name="general motors"
      department="Infotainment - Tuner"
      role="Software Engineer (intern)"
      duration="May 2019 - Dec 2019"
      notes={
        <ul>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Worked within the Tuner Team to develop and maintain tuner modules for 2022 GM vehicles."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Worked alongside another developer to provide QA team with new test app features that sped up interactive testing by 30%."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Worked closely with product owners to develop multi-user(user profiles) capabilities for radio application."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Technologies Used: Android SDK , Java, Linux, SCM Tools (Git, Jira, Gerrit, Jenkins, OpenGrok), MS Office."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
        </ul>
      }
    />,

    <CompanySection
      name="shopfiy (intern)"
      department="Core"
      role="Software Developer (intern)"
      duration="May 2022 -  June 2023"
      notes={
        <ul>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Worked within the Engage Team, which was responsible for the customers and segmentation section of the Shopify mobile app."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Migrated the customer subscriptions section to React Native, marking it as one of the initial sections to transition to this platform."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Collaborated within a team to implement the customer merge feature, partnering closely with UX designers and project managers throughout the process."
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
          <li style={{ paddingBottom: "0.5rem" }}>
            <Header
              title="Technologies Used: Android, iOS, React Native, GraphQL"
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </li>
        </ul>
      }
    />,

      <CompanySection
        name="shopfiy"
        department="Core"
        role="Software Developer"
        duration="June 2023 - Sept 2025"
        notes={
          <ul>
            <li style={{ paddingBottom: "0.5rem" }}>
              <Header
                title="Part of the Front Office team, which is responsible for the products section of the Shopify mobile app."
                font={FONT.MONO}
                color={COLOR.WHITE}
              />
            </li>
            <li style={{ paddingBottom: "0.5rem" }}>
              <Header
                title="Technologies Used: Android, iOS, React Native, GraphQL, Splunk, Bugsnag, Observe Analytics."
                font={FONT.MONO}
                color={COLOR.WHITE}
              />
            </li>
          </ul>
        }
      />,

      <CompanySection
        name="DoorDash"
        department="Dasher & Logistics"
        role="Software Engineer"
        duration="Sept 2025 - Present"
        notes={
          <ul>
            <li style={{ paddingBottom: "0.5rem" }}>
              <Header 
                title="Just started—details coming soon!"
                font={FONT.MONO}
                color={COLOR.WHITE}
              />
            </li>
          </ul>
        }
      />,
  ]

  const colors = ["#b8b8b6", "#b8b8b6", "#b8b8b6", "#b8b8b6", "#b8b8b6", "#b8b8b6"]

  if (hoverIndex !== -1) {
    colors[hoverIndex] = "#efedec"
  }

  if (activeIndex !== -1) {
    colors[activeIndex] = "#ecc20f"
  }

  const hover = index => {
    if (index !== activeIndex) {
      setHoverIndex(index)
    }
  }

  return (
    <div id="experience" className={styles.container}>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={styles.skills}>
        <div className={styles.skillsText}>
          <div className={styles.textContainer}>
            <div className="cal-l">
              <Header
                title="about me"
                color={COLOR.BLACK}
                font={FONT.CAL_MED}
              />
            </div>

            <div className="xs">
              <Header
                title="In high school, my fascination with software development began with my first computer programming class. Since then, 
                I've immersed myself in various facets of the field through industry experience, internships and personal projects. 
                Primarily, my focus lies in mobile app development, but here's a glimpse into my current areas of active interest:"
                color={COLOR.BLACK}
                font={FONT.AVENIR_MED}
              />

              <div className={styles.bullet}>
                <div className={styles.bulletLeft}>
                  <Header
                    title="&#9656; Android Apps"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                  <Header
                    title="&#9656; React Native Apps"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                  <Header
                    title="&#9656; iOS Apps"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                </div>
                <div className={styles.bulletRight}>
                  <Header
                    title="&#9656; Web Apps"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                  <Header
                    title="&#9656; Algorithms & Data Structures"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                  <Header
                    title="&#9656; Cryptography"
                    color={COLOR.BLACK}
                    font={FONT.AVENIR_MED}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skillsImage}>
          <Stack />
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.experienceTitle}>
          <div className="cal-l">
            <Header
              title="experience"
              color={COLOR.BLACK}
              font={FONT.CAL_MED}
            />
          </div>
        </div>

        <div className={styles.experienceBox}>
          <div className={styles.experienceBoxTimeline}>
            <Timeline
              activeIndex={activeIndex}
              hoverIndex={hoverIndex}
              setHover={setHoverIndex}
              setActive={setActiveIndex}
              hover={hover}
            />
          </div>

          <div className={styles.experienceBoxHistory} ref={ref}>
            <div className={`${styles.experienceBoxTitle} cal-l`}>
              <Header
                title="HISTORY"
                color={COLOR.YELLOW}
                font={FONT.CAL_MED}
              />
            </div>

            <ul
              style={{ paddingInlineStart: "2rem" }}
              className={`${styles.experienceBoxList} xs`}
            >
              <li
                onClick={() => setActiveIndex(0)}
                onMouseOver={() => hover(0)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[0]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header title="University of Toronto" font={FONT.MONO} />
              </li>
              <li
                onClick={() => setActiveIndex(1)}
                onMouseOver={() => hover(1)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[1]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header title="General Motors: IT Intern" font={FONT.MONO} />
              </li>
              <li
                onClick={() => setActiveIndex(2)}
                onMouseOver={() => hover(2)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[2]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header
                  title="General Motors: Software Intern"
                  font={FONT.MONO}
                />
              </li>
              <li
                onClick={() => setActiveIndex(3)}
                onMouseOver={() => hover(3)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[3]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header title="Shopify: Software Intern" font={FONT.MONO} />
              </li>
              <li
                onClick={() => setActiveIndex(4)}
                onMouseOver={() => hover(4)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[4]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header title="Shopify: Software Developer" font={FONT.MONO} />
              </li>
              <li
                onClick={() => setActiveIndex(5)}
                onMouseOver={() => hover(5)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  color: `${colors[5]}`,
                  cursor: "pointer",
                  transition: "color 0.1s",
                }}
              >
                <Header title="DoorDash: Software Engineer" font={FONT.MONO} />
              </li>
            </ul>
          </div>

          <div className={`${styles.experienceBoxInfo} xs`}>
            <div
              style={{
                maxHeight: `${
                  winWidth > 1300 && winWidth > 0 ? `${height}px` : "none"
                }`,
              }}
              className={styles.companyContainer}
            >
              {companyData[activeIndex]}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navBottom}>
        <Nav />
      </div>
    </div>
  )
}
