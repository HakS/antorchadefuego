import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import styles from "../styles/Layout.module.scss"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Iglesia Antorcha de Fuego - Concilio Aposento Alto"></meta>
      </Head>
      <div className={styles.mainWrapper}>
        <header className={styles.mainHeader}>
          <div className={`${styles.mainHeader__inner} ${styles.pageMaxWidth}`}>
            <Link href="/" className="mb-0 inline-flex">
              <Image src="/logo.png" width={218} height={75} alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto" />
            </Link>
            <nav>
              <Link href="/emisora">Emisora</Link>
              <Link href="/devocional">Devocional</Link>
              <Link href="/donaciones">Donaciones</Link>
              <Link href="/Contacto">Contacto</Link>
            </nav>
          </div>
        </header>
        <div className={styles.mainContent}>
          <div className={`${styles.pageMaxWidth} ${styles.mainContent__inner}`}>
            <main>{children}</main>
          </div>
        </div>
        <div className={styles.mainFooter}>
          <div className={`${styles.pageMaxWidth}`}>
            <footer>
              Iglesia Antorcha de Fuego - Concilio Aposento Alto, {new Date().getFullYear()} todos los derechos
              reservados.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
