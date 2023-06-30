import { useEffect } from "react";

import AppHead from "../components/AppHead";
import Layout from "./Layout";
import topImage from "../public/images/bck_devocional.jpeg";

import styles from "./devocional.module.scss";
import { useSnapCarousel } from "react-snap-carousel";

export default function Home() {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  const texts = [
    "Objectively syndicate equity invested partnerships for real-time supply chains. Quickly productivate 2.0 web-readiness after compelling leadership. Appropriately implement sticky synergy for tactical intellectual capital. Objectively.",
    "Dynamically administrate backend resources without empowered resources. Conveniently harness quality applications and worldwide bandwidth. Competently revolutionize highly efficient intellectual capital for optimal value. Rapidiously conceptualize.",
    "Rapidiously grow client-focused potentialities whereas backend information. Collaboratively reintermediate reliable outsourcing rather than process-centric sources. Proactively envisioneer client-centered initiatives after technically sound initiatives. Appropriately administrate.",
    "Objectively syndicate equity invested partnerships for real-time supply chains. Quickly productivate 2.0 web-readiness after compelling leadership. Appropriately implement sticky synergy for tactical intellectual capital. Objectively.",
    "Dynamically administrate backend resources without empowered resources. Conveniently harness quality applications and worldwide bandwidth. Competently revolutionize highly efficient intellectual capital for optimal value. Rapidiously conceptualize.",
    "Rapidiously grow client-focused potentialities whereas backend information. Collaboratively reintermediate reliable outsourcing rather than process-centric sources. Proactively envisioneer client-centered initiatives after technically sound initiatives. Appropriately administrate.",
  ];

  return (
    <>
      <AppHead title="Devocional" />
      <Layout topContent="Devocional" topImage={topImage}>
        <div className={`page-max-width page-padding`}>
          <ul className={`carousel ${styles.carousel}`} ref={scrollRef}>
            {texts.map((text, i) => (
              <li key={i}>
                <div>{text}</div>
              </li>
            ))}
          </ul>
          <div>
            {activePageIndex + 1} / {pages.length}
          </div>
          <button onClick={() => prev()}>Prev</button>
          <button onClick={() => next()}>Next</button>
          <ol className={styles.pager}>
            {pages.map((_, i) => (
              <li key={i}>
                <button
                  style={i === activePageIndex ? { opacity: 0.5 } : {}}
                  onClick={() => goTo(i)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Layout>
    </>
  );
}
