import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import styles from "../styles/Layout.module.scss"
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
              <div className="page-max-width page-padding">
                Iglesia Antorcha de Fuego - Concilio Aposento Alto,{" "}
                {new Date().getFullYear()} todos los derechos reservados.
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
