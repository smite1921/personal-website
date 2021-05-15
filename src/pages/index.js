import React from "react";
import Nav from "../components/nav/nav"
import Home from "./home/home";
import Experience from "./experience/experience";
import Project from "./projects/projects";
import Contact from "./contact/contact";
import Head from "../components/head/head";
import styles from "./index.module.css";

export default function Index() {
  return (
    <div>
      <Head/>
      <div className={styles.nav}>
        <Nav/>
      </div>
      <Home/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}
