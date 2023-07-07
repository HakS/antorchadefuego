import Layout from './Layout';
import styles from './index.module.scss';
import AppHead from '../components/AppHead';

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useSnapCarousel } from "react-snap-carousel";
import Image from 'next/image';

import img1 from "../public/images/worship3.jpeg";
import img2 from "../public/images/img2_darkened.jpeg";

export default function Home() {
  const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();

  const topContent = (
    <div className={styles.topContent}>
      <ul className={`carousel ${styles.carousel}`} ref={scrollRef}>
        <li>
          <figure className="mainImage">
            <Image
              src={img1}
              fill={true}
              alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
              placeholder="blur"
            />
          </figure>
          <article>
            <h1>Mateo 17:20</h1>
            <h2>
              Porque de cierto os digo, que si tuviereis fe como un grano de
              mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y
              nada os será imposible.
            </h2>
          </article>
        </li>
        <li>
          <figure className="mainImage">
            <Image
              src={img2}
              fill={true}
              alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
              placeholder="blur"
            />
          </figure>
          <article>
            <h1>Isaias 33:6</h1>
            <h2>
              El será la seguridad de tus tiempos, te dará en abundancia
              salvación, sabiduría y conocimiento. el temor del Señor será tu
              tesoro.
            </h2>
          </article>
        </li>
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
          style={{ opacity: activePageIndex == pages.length - 1 ? 0.4 : 0.7 }}
          onClick={() => next()}
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <AppHead />
      <Layout fullScreen={true} topContent={topContent} topImage={false} customLayout={true}>
        <div className={`page-max-width page-padding ${styles.zone1}`}>
          <section className={styles.aboutUs}>
            <h2 className={styles.aboutUs_title}>¡Gusto en conocerte!</h2>
            <div className={styles.aboutUs_content}>
              Vive una experienca única en el Señor. Una iglesia con corazón abierto para extender su mano de ayuda a las comunidades.
            </div>
          </section>
          <section className={styles.services}>
            <h2>Servicios</h2>
            <ul>
              <li>Ayunos: Sábados 10:00 am</li>
              <li>Escuela Dominical: 10:00 am</li>
            </ul>
          </section>
          <section className={styles.online}>
            <h2>En linea</h2>
            <ul>
              <li>Devocional Amanecer en Victoria: Todos los dias 5:00 am</li>
              <li>Oración Eficaz: Todos los dias 3:00 pm</li>
              <li>Viernes del Todopoderoso: 9:00 pm</li>
              <li>Conectados con el Dios del Cielo: Domingos 9:00 pm</li>
            </ul>
          </section>
        </div>
        <section className={styles.zone2}>
          <div className={styles.zone2_image}></div>
          <h2 className={styles.zone2_title}>Haciendo participe a toda persona y nación del Evangelio</h2>
          <h3 className={styles.zone2_subtitle}>Visítanos o conéctate en linea para acompañarnos.</h3>
          <div className={styles.zone2_links}>
            <a className="button" href="https://www.google.com/maps/place/Church+Antorcha+de+Fuego/@11.0182756,-74.804673,19z/data=!4m5!3m4!1s0x8ef42d6c100599b7:0xc146c2b6690fc56a!8m2!3d11.0182756!4d-74.8046731" target="_blank" rel="noreferrer">Visítanos</a>
            <a className="button" href="https://www.youtube.com/@emisoraantorchadefuego2089/streams" target="_blank" rel="noreferrer">En vivo</a>
          </div>
        </section>
      </Layout>
    </>
  );
}
