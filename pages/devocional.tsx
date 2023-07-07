import { useEffect } from "react";

import AppHead from "../components/AppHead";
import Layout from "./Layout";
import topImage from "../public/images/bck_devocional.jpeg";
import person1 from "../public/images/person1.jpeg";
import person2 from "../public/images/person2.jpeg";
import person3 from "../public/images/person3.jpeg";

import styles from "./devocional.module.scss";
import { useSnapCarousel } from "react-snap-carousel";
import Image from "next/image";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Home() {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  const leads = [
    {
      name: "Marlyn Hester",
      role: "Lorem Ipsum",
      image: person1,
      text: "Dynamically administrate backend resources without empowered resources. Conveniently harness quality applications and worldwide bandwidth. Competently revolutionize highly efficient intellectual capital for optimal value. Rapidiously conceptualize.",
    },
    {
      name: "Daxton King",
      role: "Lorem Ipsum",
      image: person2,
      text: "Rapidiously grow client-focused potentialities whereas backend information. Collaboratively reintermediate reliable outsourcing rather than process-centric sources. Proactively envisioneer client-centered initiatives after technically sound initiatives. Appropriately administrate.",
    },
    {
      name: "Troy Stacey",
      role: "Lorem Ipsum",
      image: person3,
      text: "Objectively syndicate equity invested partnerships for real-time supply chains. Quickly productivate 2.0 web-readiness after compelling leadership. Appropriately implement sticky synergy for tactical intellectual capital. Objectively.",
    },
  ];
  const testimonials = [
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
          <div className={styles.leads}>
            {leads.map((lead, i) => (
              <div key={i} className={styles.lead}>
                <div className={styles.leadImage}>
                  <Image src={lead.image} width={350} alt={lead.name} />
                </div>
                <div className={styles.leadContent}>
                  <h2>{lead.name}</h2>
                  <h3>{lead.role}</h3>
                  <div className={styles.leadText}>{lead.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.testimonials}>
            <h2>Testimonios</h2>
            <ul className={`carousel ${styles.carousel}`} ref={scrollRef}>
              {testimonials.map((text, i) => (
                <li key={i}>
                  <div>{text}</div>
                </li>
              ))}
            </ul>
            {/* TODO: build this as a component */}
            <div className={`carouselControls ${styles.carouselControls}`}>
              <button
                style={{ opacity: activePageIndex == 0 ? 0.4 : 0.7 }}
                onClick={() => prev()}
              >
                <FaChevronCircleLeft />
              </button>
              <button
                style={{
                  opacity: activePageIndex == pages.length - 1 ? 0.4 : 0.7,
                }}
                onClick={() => next()}
              >
                <FaChevronCircleRight />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
