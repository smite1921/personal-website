import React, { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { Nav } from "@/components/layout"
import { Header, COLOR, FONT } from "@/components/ui"
import { AndroidLogo, TagLogo, MazeLogo } from "@/components/icons"
import * as styles from "./Projects.module.css"
import "animate.css"

interface ProjectSectionProps {
  name: string
  logo: ReactNode
  link?: string
  github: string
  platform: string
  description: string
  highlights?: string[]
  tech: string
}

function ProjectSection({
  name,
  logo,
  link,
  github,
  platform,
  description,
  highlights,
  tech,
}: ProjectSectionProps) {
  return (
    <div className={styles.projectSection}>
      <div className={`${styles.projectTitle} cal-l`}>
        <div className={styles.projectName}>
          <Header title={name} color={COLOR.WHITE} font={FONT.CAL_MED} />
        </div>

        <div className={styles.projectLogo}>{logo}</div>
      </div>

      <div className={`${styles.projectContent} xxs`}>
        <div>
          <div className={styles.projectContentPlatform}>
            <b>
              <Header title="Platform" font={FONT.MONO} color={COLOR.WHITE} />
            </b>
            <Header
              title={`: ${platform}`}
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </div>
          <b>
            <Header title="Links:" font={FONT.MONO} color={COLOR.WHITE} />{" "}
          </b>
          <div className={`${styles.projectContentLinks}`}>
            <ul>
              {link !== undefined && (
                <li>
                  <Header
                    title={
                      link !== "/soon"
                        ? "Project Link"
                        : "Project Link - Coming Soon"
                    }
                    font={FONT.MONO}
                    color={COLOR.WHITE}
                    link={link}
                  />
                </li>
              )}
              <li>
                <Header
                  title={
                    github !== "/soon"
                      ? "Github Link"
                      : "Github Link - Coming Soon"
                  }
                  font={FONT.MONO}
                  color={COLOR.WHITE}
                  link={github}
                />
              </li>
              {link === undefined && <br />}
            </ul>
          </div>
        </div>
        <div className={styles.projectContentBody}>
          <b>
            <Header
              title="Description: "
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </b>
          <Header title={description} font={FONT.MONO} color={COLOR.WHITE} />
        </div>
        <div className={styles.projectContentBody}>
          <b>
            <Header title="Highlights: " font={FONT.MONO} color={COLOR.WHITE} />
          </b>
          <div className={`${styles.projectContentLinks}`}>
            <ul>
              {(highlights ?? []).map((highlight, idx) => (
                <li key={idx}>
                  <Header
                    title={highlight}
                    font={FONT.MONO}
                    color={COLOR.WHITE}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <b>
            <Header
              title="Technologies Used:"
              font={FONT.MONO}
              color={COLOR.WHITE}
            />
          </b>
          <Header title={tech} font={FONT.MONO} color={COLOR.WHITE} />
        </div>
      </div>
    </div>
  )
}

export default function Project() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div id="project" className={styles.container}>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={`${styles.title} xxl`}>
        <Header title="projects" color={COLOR.WHITE} font={FONT.CAL_MED} />
      </div>

      <div
        ref={ref}
        className={inView ? "animate__animated animate__slideInUp" : ""}
        style={{
          display: "flex",
          flexGrow: 1,
          animationDuration: "1s",
          animationDelay: "0.25s",
          animationFillMode: "both",
        }}
      >
        <div className={styles.projects}>
          <ProjectSection
            name="enigma machine"
            logo={<AndroidLogo />}
            link="https://play.google.com/store/apps/details?id=com.smitpatel.enigmamachine"
            github="https://github.com/smite1921/enigma_machine"
            platform="Android (Mobile)"
            highlights={[
              "45K+ downloads on the Play Store (and growing), with a 4.5 average rating across 260+ reviews",
              "Fully open-source, with the entire codebase available on GitHub",
            ]}
            description="Android app that simulates the historic Enigma Machine used in WWII cryptography. Try your hand at codebreaking with this faithful recreation."
            tech="Kotlin, Java, Android, Adobe Illustrator"
          />

          <ProjectSection
            name="g1 ready 2025"
            logo={<TagLogo />}
            link="https://play.google.com/store/apps/details?id=com.smitpatel.g1app&hl=en_US"
            github="https://github.com/smite1921/quiz-app"
            platform="React Native"
            highlights={[
              "Works offline so users can study anytime, anywhere",
              "1,000+ downloads on the Google Play Store",
            ]}
            description="G1 Ready 2025 is an Ontario G1 test prep app with real practice questions. Covers road signs, rules, and safety, with offline access."
            tech="React Native, Expo"
          />

          <ProjectSection
            name="maze generators"
            logo={<MazeLogo />}
            github="https://github.com/smite1921/maze-generators"
            link="https://smitpatel.me/maze-generators/"
            platform="Website"
            highlights={[
              "Users can start, stop, and reset each algorithm, making it easy to see exactly how mazes are constructed and traversed",
              "Built with React, Gatsby, JavaScript, HTML, and CSS, highlighting strong frontend development skills",
            ]}
            description="A React website for exploring maze generation algorithms with interactive visualizations."
            tech="React, Gatsby, JavaScript, HTML, CSS"
          />
        </div>
      </div>

      <div className={styles.navBottom}>
        <Nav />
      </div>
    </div>
  )
}
