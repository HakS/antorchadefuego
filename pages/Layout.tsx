import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaYoutube} from "react-icons/fa";
import styles from "./Layout.module.scss"
import topImage from "../assets/images/worship3.jpeg";
import { useState } from "react";

type LayoutProps = {
  fullScreen ?: boolean;
  topContent ?: React.ReactNode | string;
  children: React.ReactNode;
};

const MenuLinks = () => {
  return (
    <>
      <Link href="/emisora">Emisora</Link>
      <Link href="/devocional">Devocional</Link>
      <Link href="/donaciones">Donaciones</Link>
      <Link href="/contacto">Contacto</Link>
    </>
  );
}

const Layout = ({fullScreen = false, topContent = '', children}: LayoutProps) => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [menuChanging, setMenuChanging] = useState(false);
  let menuTimeout: NodeJS.Timeout;

  const toogleMenu = () => {
    if (!activeMenu) {
      setActiveMenu(true);
      setMenuChanging(true);
      if (menuTimeout) clearTimeout(menuTimeout);
      menuTimeout = setTimeout(() => setMenuChanging(false), 600);
    }
    else {
      closeMenu();
    }
  }

  const closeMenu = () => {
    setMenuChanging(true);
    setActiveMenu(false);
    if (menuTimeout) clearTimeout(menuTimeout);
    menuTimeout = setTimeout(() => setMenuChanging(false), 600);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:site_name"
          content="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
        ></meta>
      </Head>
      <div className={styles.outerContainer}>
        <nav
          className={styles.mobileSidebar}
          data-active={activeMenu}
          data-changing={menuChanging}
        >
          <Link href="/">Inicio</Link>
          <MenuLinks />
          <button onClick={() => closeMenu()}>×</button>
        </nav>
        <div className={styles.pageWrap}>
          <div className={styles.mainWrapper}>
            <header className={styles.mainHeader}>
              <div className={styles.mainHeader_inner}>
                <Link href="/">
                  <Image
                    src="/logo.png"
                    width={218}
                    height={75}
                    alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
                  />
                </Link>
                <nav>
                  <MenuLinks />
                </nav>
                <button onClick={() => toogleMenu()}>
                  <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                  </svg>
                </button>
              </div>
            </header>
            <div className={styles.mainImage} data-full-screen={fullScreen}>
              <Image
                src={topImage}
                fill={true}
                alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
                placeholder="blur"
              />
            </div>
            <div className={styles.topContent} data-full-screen={fullScreen}>
              {typeof topContent === "string" ? (
                <h1 className={styles.defaultMainTitle}>{topContent}</h1>
              ) : (
                topContent
              )}
            </div>
            <main className={styles.mainContent}>{children}</main>

            <footer className={styles.mainFooter}>
              <div
                className={`page-max-width page-padding ${styles.mainFooterInner}`}
              >
                <div className={styles.footer1}>
                  <div className={styles.footer1_logo}>
                    <Image
                      src="/logo.png"
                      width={218}
                      height={75}
                      alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto"
                    />
                  </div>
                  <div className={styles.footer1_address}>
                    <a
                      href="https://www.google.com/maps/place/Iglesia+Antorcha+de+Fuego/@11.0182769,-74.8052202,19z/data=!3m1!4b1!4m5!3m4!1s0x8ef42d6c100599b7:0xc146c2b6690fc56a!8m2!3d11.0182756!4d-74.8046731"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Calle 80 #74-34, Barrio Paraíso, Barranquilla, Atlántico -
                      Colombia
                    </a>
                  </div>
                  <div className={styles.footer1_links}>
                    <MenuLinks />
                  </div>
                  <div className={styles.footer1_social}>
                    <div>
                      <h3>Síguenos</h3>
                      <div>
                        <a
                          href="https://www.facebook.com/antorchade.fuegoemisora/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UChHN8gsvtH1ZoB1su2JgLAg/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.footer2}`}>
                <div className={`page-max-width page-padding`}>
                  Iglesia Antorcha de Fuego - Concilio Aposento Alto,{" "}
                  {new Date().getFullYear()} todos los derechos reservados.
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div
          className={styles.pageOverlay}
          data-active={activeMenu}
          data-changing={menuChanging}
          onClick={() => closeMenu()}
        />
      </div>
    </>
  );
};

export default Layout;
